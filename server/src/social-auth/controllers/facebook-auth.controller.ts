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


// facebook-auth.controller.ts
import { Controller, Get, Req, Res, UseGuards, HttpStatus} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
// import { FacebookAuthService } from '../services/facebook-auth.service';

@Controller('auth/facebook')
export class FacebookAuthController {
    // constructor(private readonly facebookAuthService: FacebookAuthService) {}

    @Get()
    @UseGuards(AuthGuard('facebook'))
    async facebookAuth() {
    }

    @Get('callback')
    @UseGuards(AuthGuard('facebook'))
    async facebookAuthRedirect(@Req() req, @Res() res) {
        try {

            return res.status(HttpStatus.OK).json({
                statusCode: HttpStatus.OK,
                data: req.user,
            });
        } catch (error) {
            console.error('Error in facebookAuthRedirect:', error);

            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                message: 'Internal Server Error',
            });
        }
    }
}
