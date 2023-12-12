import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { User } from '../../users/entities/user.entity';

@Injectable()
export class GoogleAuthService {
    constructor(@InjectModel(User.name) private readonly userModel: Model<Document>) {}

    async googleLogin( email: string): Promise<Document> {
        let user = await this.userModel.findOne({ email });
        

        if (!user) {
            user = await this.userModel.create({ email });
        }
        await user.save();

        return user;

    }
}



