import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Job } from '../../jobs/entities/job.entity'
import { User } from '../../users/entities/user.entity'
import { Question } from '../../questions/entities/question.entity'

import * as mongoose from 'mongoose';


@Schema({ timestamps: true })
export class Interviewer extends Document {
    @Prop([
        {
            question_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },
        }
    ])
    questions: [{
        question_id: Question;
    }];

    //making link with job
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Job' })
    job_id: Job;

    //who is interviewee
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    interviewee: User;

    //who is interviewer
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    interviewer: User;

}



export const InterviewerSchema = SchemaFactory.createForClass(Interviewer);