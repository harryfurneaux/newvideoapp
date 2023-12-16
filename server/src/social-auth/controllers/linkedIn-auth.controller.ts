import { Controller, Get, Req, Res, UseGuards, HttpStatus } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LinkedInAuthService } from '../services/linkedin-auth.service';
import { LinkedInStrategy } from '../strategies/linkedin-auth.strategy';  // Import LinkedInStrategy

@Controller('auth/linkedin')
export class LinkedInAuthController {
  constructor(
    private readonly linkedInAuthService: LinkedInAuthService,
    private readonly linkedInStrategy: LinkedInStrategy,
  ) {}

  @Get()
  @UseGuards(AuthGuard('linkedin'))
  async linkedInAuth() {
  }

  @Get('callback')
  async linkedInAuthRedirect(@Req() req, @Res() res) {
    try {

      const authorizationCode=req.query.code
      const tokenResponse = await this.linkedInStrategy.exchangeAuthorizationCodeForToken(authorizationCode);
      const userData=await this.linkedInStrategy.getUserInfo(tokenResponse.access_token)
      
      if (userData) {

        return res.status(HttpStatus.OK).json({
          statusCode: HttpStatus.OK,
          data: userData,
        });
      } else {
        return res.status(HttpStatus.UNAUTHORIZED).json({
          statusCode: HttpStatus.UNAUTHORIZED,
          message: 'User not authenticated',
        });
      }
    } catch (error) {
      console.error('Error in linkedInAuthRedirect:', error);

      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error',
      });
    }
  }

}
