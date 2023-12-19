import { IsMongoId,  IsOptional, IsArray } from 'class-validator';


export class CreateInterviewerDto {
    @IsArray()
    // @IsMongoId({ each: true })
    questions: string[];
  
    // @IsOptional()
    // @IsMongoId()
    // interviewee: string;

    @IsOptional()
    // @IsMongoId()
    job_title: string

    @IsOptional()
    @IsMongoId()
    interviewer: string;

}