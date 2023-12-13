// // facebook-auth.controller.ts
// import { Controller, Get, Req, Res, UseGuards, HttpStatus} from '@nestjs/common';
// import { AuthGuard } from '@nestjs/passport';
// import { FacebookAuthService } from '../services/facebook-auth.service';

// @Controller('auth/facebook')
// export class FacebookAuthController {
//     constructor(private readonly facebookAuthService: FacebookAuthService) {}

//     @Get()
//     @UseGuards(AuthGuard('facebook'))
//     async facebookAuth() {
//     }

//     @Get('callback')
//     @UseGuards(AuthGuard('facebook'))

//     async facebookAuthRedirect(@Req() req, @Res() res) {
//         console.log('User Data:', req.user);

//         return {
//             statusCode: HttpStatus.OK,
//             data: req.user,
//           };

//     }
// }

import {
  Controller, Get, Req, Res, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FacebookStrategy } from '../strategies/facebook-auth.strategt';
import axios from 'axios';
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
//    @UseGuards(AuthGuard('facebook'))
  async facebookAuthRedirect(@Req() req, @Res() res) {
    try {
        const accessToken  = req.query.code;
console.log("acces fb tokn",accessToken)
        const response = await axios.get('https://graph.facebook.com/v13.0/me', {
            params: {
              access_token: accessToken,
              fields: 'name',
            },
          });
         
          console.log("user data",response)
//         const access_token  = req.query.code;
// console.log("fb accs tok ",access_token)
//          const userData=await this.facebookStrategy.fetchUserData(access_token)
//          console.log(userData)

       
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: req.user,
      });
    } catch (error) {
      console.error('Error in facebookAuthRedirect:', error.message);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
      });
    }
  }
}
