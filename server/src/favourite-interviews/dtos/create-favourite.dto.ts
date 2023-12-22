
import { IsArray, IsNotEmpty, IsString, IsMongoId} from 'class-validator';

export class CreateFavoriteInterviewDto {
  @IsArray()
  // @IsMongoId()
  favoriteInterviews: string[]; 

  @IsMongoId()
  interviewer: string; // User ID who is favoriting the interviews
}
