import {
  Injectable,
  ConflictException,
  BadRequestException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserLoginDto } from './dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';
//importing bcrypt password config
import { comparePassword, hashPassword } from '../utils/bcrypt';
import { AuthService } from '../auth/auth.service';
import { MessagingService } from 'src/messaging/services/messaging.service';
import { MediaService } from 'media/services/media.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private UserModel: Model<User>,
    private readonly authService: AuthService,
    private readonly messagingService: MessagingService,
    private readonly mediaService: MediaService,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | null> {
    if (await this.findOne(createUserDto.email)) {
      throw new ConflictException('User already exists');
    }
    if (createUserDto.password !== createUserDto.confirm_password) {
      throw new BadRequestException('Passwords do not match');
    }
    createUserDto.password = await hashPassword(createUserDto.password);
    const createdUser = await this.UserModel.create(createUserDto);
    // Exclude the password field from the returned user object
    return createdUser.toObject({
      virtuals: true,
      versionKey: false,
      transform: (_doc, ret) => {
        delete ret.password;
        return ret;
      },
    }) as User;
  }

  async findAll(): Promise<User[] | []> {
    return await this.UserModel.find().select('-password');
  }

  async findById(id: string): Promise<User | null> {
    let user: User | null = await this.UserModel.findById(id).select(
      '-v -password',
    );
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  async findOne(email: string): Promise<User | null> {
    return await this.UserModel.findOne({ email });
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
    file?: Express.Multer.File,
  ) {
    let user;
  
    try {
      user = await this.UserModel.findById(id);
  
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      if (Object.keys(updateUserDto).some(field => field !== 'password')) {
        if (!(await comparePassword(updateUserDto.current_password, user.password))) {
          throw new BadRequestException('Current password is incorrect');
        }
      }
  
      if (updateUserDto.password) {
        if (!(await comparePassword(updateUserDto.current_password, user.password))) {
          throw new BadRequestException('Current password is incorrect');
        }
  
        const hashedPassword = await hashPassword(updateUserDto.password);
        updateUserDto.password = hashedPassword;
      }
  
      if (file) {
        const profileImageUrl = this.mediaService.saveProfileImage(file);
        user.profile_image = profileImageUrl;
        await user.save();
      }
  
      const updatedData = await this.UserModel.findByIdAndUpdate(
        id,
        updateUserDto,
        {
          new: true,
        },
      ).select('-password');
  
      updatedData['id'] = updatedData._id;
      return updatedData;
    } catch (error) {
      throw error;
    }
  }
  
  async remove(id: string): Promise<User | null> {
    return await this.UserModel.findByIdAndRemove(id);
  }

  async login(userLoginDto: UserLoginDto) {
    let user: User | null = await this.findOne(userLoginDto.email);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (!(await comparePassword(userLoginDto.password, user.password))) {
      throw new BadRequestException('Invalid credentials');
    }
    const jwtToken = await this.authService.generateToken({
      id: user.id,
      // role: user.role,
    });
    const chatUser = await this.messagingService.initializeUser(user.id);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      location: user.location,
      company_name: user.company_name,
      profile_image: user.profile_image || null,

      // role: user.role,
      token: jwtToken,
      chat: {
        user: chatUser.user,
        token: chatUser.token,
      },
    };
  }

  async updatePassword(
    email: string,
    newPassword: string,
  ): Promise<User | null> {
    const user = await this.UserModel.findOne({ email });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    user.password = await hashPassword(newPassword);
    const updatedUser = await user.save();
    return updatedUser;
  }

  async socialLogin(socialUserData: any): Promise<any> {
    const { name, email } = socialUserData;
    let user = await this.UserModel.findOne({ email });
    if (!user) {
      user = await this.UserModel.create({
        name,
        email,
      });
    }
    const jwtToken = await this.authService.generateToken({
      id: user.id,
    });
    const chatUser = await this.messagingService.initializeUser(user.id);
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      profile_image: user.profile_image || null,
      token: jwtToken,
      chat: {
        user: chatUser.user,
        token: chatUser.token,
      },
    };
  }

  async me(authorization: string): Promise<any> {
    if (!authorization || !authorization.startsWith('Bearer ')) {
      throw new UnauthorizedException('Invalid token format');
    }
    const token = authorization.split(' ')[1];
    try {
      const decodedToken = await this.authService.verifyToken(token);
      if (this.authService.isTokenExpired(decodedToken)) {
        throw new UnauthorizedException('Token has expired');
      }

      let user = await this.UserModel.findById(decodedToken.id).select(
        '-v -password',
      );
      if (!user) throw new NotFoundException('user not found');
      const jwtToken = await this.authService.generateToken({
        id: user.id,
      });

      const chatUser = await this.messagingService.initializeUser(user.id);

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        location: user.location,
        company_name: user.company_name,
        profile_image: user.profile_image || null,
        token: jwtToken,
        chat: {
          user: chatUser.user,
          token: chatUser.token,
        },
      };
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
