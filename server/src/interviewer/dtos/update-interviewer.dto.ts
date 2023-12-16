
    import {  IsMongoId, IsOptional } from 'class-validator';


    export class UpdateInterviewerDto {

        @IsOptional()
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


