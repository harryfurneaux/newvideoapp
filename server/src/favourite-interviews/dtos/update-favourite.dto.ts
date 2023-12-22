
import { IsArray, IsOptional, IsString } from 'class-validator';

export class UpdateFavoriteInterviewDto {
  @IsOptional()
  favoriteInterviews?: string[]; 

  @IsOptional()
  interviewer?: string;
}
