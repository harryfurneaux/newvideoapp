// favourite-interviews.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FavouriteInterviewController } from './controllers/favourite.controller';
import { FavouriteInterviewService } from './services/favourite.service';
import { FavouriteInterview, FavouriteInterviewSchema } from './entities/favourite.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FavouriteInterview.name, schema: FavouriteInterviewSchema }]),
  ],
  controllers: [FavouriteInterviewController],
  providers: [FavouriteInterviewService],
})
export class FavouriteInterviewsModule {}
