import {
  Controller,
  Get,
  Req,
  Res,
  UseGuards,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FacebookStrategy } from '../strategies/facebook-auth.strategt';
// import { FacebookAuthService } from '../services/facebook-auth.service';

@Controller('auth/facebook')
export class FacebookAuthController {
  constructor(private readonly facebookStrategy: FacebookStrategy) {}

  @Get()
  @UseGuards(AuthGuard('facebook'))
  async facebookAuth(): Promise<any> {
    return HttpStatus.OK;
  }

  @Get('callback')
    //  @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req, @Res() res) {
    try {
      const access_token = req.query.code;
      // console.log('fb accs tok ', access_token);
      const userData = await this.facebookStrategy.fetchUserData(access_token);
      console.log(userData, "data of user");

      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: req.user,
      });
    } catch (error) {
      console.error('Error in facebookAuth', error.message);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
      });
    }
  }
}
