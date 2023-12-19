import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { GoogleAuthService } from '../services/google-auth.service';
import { GoogleStrategy } from '../strategies/google-auth.stategy';

import { AuthGuard } from '@nestjs/passport';

@Controller('auth/google')
export class GoogleAuthController {
  constructor(private readonly googleAuthService: GoogleAuthService,
    private readonly googleStrategy: GoogleStrategy) { }

  @Get('')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }


  @Get('callback')
  // @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {

    const accessToken = req.query.code

    const { data } = await this.googleStrategy.getUserData(accessToken)

    const user = await this.googleAuthService.googleLogin(
      data.email,
      data.name,
      data.location ?? null
    );
    return user;
  }




}