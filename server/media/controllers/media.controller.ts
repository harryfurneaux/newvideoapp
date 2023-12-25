
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MediaService } from '../services/media.service';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

//   @Post('upload-image')
//   @UseInterceptors(FileInterceptor('image'))
//   uploadImage(@UploadedFile() image: Express.Multer.File): string {
//     return this.mediaService.saveImage(image);
//   }

//   @Post('upload-video')
//   @UseInterceptors(FileInterceptor('video'))
//   uploadVideo(@UploadedFile() video: Express.Multer.File): string {
//     return this.mediaService.saveVideo(video);
//   }
}
