import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthService } from '../services/google-auth.service';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth/google')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService) {}

  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

 
  @Get('callback') 
  @UseGuards(AuthGuard('google'))
  async  googleAuthRedirect(@Req() req) {
    const user = await this.googleAuthService.googleLogin(req.user.email);
    return user;


  }
}
