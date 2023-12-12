import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy,  Profile } from 'passport-facebook';
import { ConfigService } from '@nestjs/config';
import { FacebookAuthService } from '../services/facebook-auth.service';
import * as dotenv from "dotenv";
import { userInfo } from 'os';

dotenv.config();


@Injectable()
export class FacebookStrategy extends PassportStrategy(Strategy, 'facebook') {
    constructor(
        private readonly facebookAuthService: FacebookAuthService,
        private readonly configService: ConfigService,
    ) {
        super({
            clientID: configService.get('FACEBOOK_CLIENT_ID'),
            clientSecret: configService.get('FACEBOOK_CLIENT_SECRET'),
            callbackURL: configService.get('FACEBOOK_CALLBACK_URL'),
            passReqToCallback: true,
            profileFields: ["emails", "name"]
            
        });
    }


    async validate (accessToken: string, refreshToken: string, profile: Profile, 
        done: (err: any, user: any, info?: any) => void
        ): Promise<any> {
            console.log(profile)
            try {
                const name = profile?.name?.givenName || '';
                const emails = profile?.emails || [];
            
                if (emails.length === 0 || !emails[0]?.value) {
                  throw new Error('Invalid or missing email in Facebook profile data');
                }
            
                // const user = await this.facebookAuthService.findOrCreate({
                //   email: emails[0].value,
                //   password: '12345',
                //   // Add other properties based on your requirements
                // });
            
                // done(null);
              } catch (error) {
                console.error('Error in Facebook Strategy:', error);
                // done(error, null);
              }
                  }

                }

