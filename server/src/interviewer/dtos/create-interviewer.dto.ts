import { IsMongoId,  IsOptional } from 'class-validator';


export class CreateInterviewerDto {
    @IsMongoId()
    question_id: string;

    @IsOptional()
    @IsMongoId()
    interviewee: string;

    @IsOptional()
    @IsMongoId()
    job_id: string

    @IsOptional()
    @IsMongoId()
    interviewer: string;

}