import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateInterviewerDto } from '../dtos/create-interviewer.dto';
import { UpdateInterviewerDto } from '../dtos/update-interviewer.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Interviewer } from '../entities/interviewer.entity';
import { Model } from 'mongoose';
import { QuestionsService } from '../../questions/questions.service';
import { NotificationGateway } from 'src/notifications/gateways/notification.gateway';

@Injectable()
export class InterviewerService {
  constructor(@InjectModel('Interviewer') private interviewerModel: Model<Interviewer>,
    private questionsService: QuestionsService,
    private notificationGateway: NotificationGateway,
  ) { }


  async create(createInterviewerDto: CreateInterviewerDto) {

    // Check if the question exists
    const question = await this.questionsService.findOne(createInterviewerDto.question_id);
    if (!question) {
      throw new NotFoundException('Question not found');
    }

    // Check if the interview exists
    const interview = await this.findQuestionAndJob(createInterviewerDto.interviewee, question?.job_id?._id);
    // Check if the question is already submitted for this interview
    if (interview?.questions?.some(q => q.question_id._id == createInterviewerDto.question_id)) {
      // throw new ConflictException('You have already submitted a video for this question.');
    }

    let createdInterview;

    if (interview) {
      // Update the existing interview with the new question and video URL
      createdInterview = await this.interviewerModel.findByIdAndUpdate(
        interview._id,
        {
          $push: {
            questions: {
              question_id: createInterviewerDto.question_id,
            }
          }
        },
        {
          new: true
        }
      );
    } else {
      // Create a new interview
      createdInterview = await this.interviewerModel.create({
        interviewee: createInterviewerDto.interviewee,
        interviewer: createInterviewerDto.interviewer,
        job_id: question?.job_id?._id,
        questions: [
          {
            question_id: createInterviewerDto.question_id,
          },
        ],
      });
    }

    // Notify the interviewee
    const intervieweeId = createdInterview.interviewee; 
    const notificationMessage = 'You have been invited for an interview for job';
    // console.log('Notification message:', `${intervieweeId}: ${notificationMessage}`);

    this.notificationGateway.handleNotification(`${intervieweeId}: ${notificationMessage}`);

    return createdInterview;
  }


  async findAll() {
    let interviews = await this.interviewerModel.find().populate({
      path: 'interviewee',
      select: '-password',
    })
      .populate({
        path: 'job_id',
      })
      .populate('questions.question_id')
    if (interviews.length == 0) {
      throw new NotFoundException('interviewer not found')
    }
    return interviews
  }

  async findQuestionAndJob(interviewee: string, job_id: string) {
    let interview = await this.interviewerModel.findOne(
      {
        job_id,
        interviewee
      }
    ).populate({
      path: 'interviewee',
      select: '-password',
    })
      .populate({
        path: 'job_id',
      })
      .populate('questions.question_id')
    return interview
  }


  async findOne(id: string) {
    let interview = await this.interviewerModel.findById(id)
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })
      .populate('questions.question_id')
    if (!interview) {
      throw new NotFoundException('interviewer not found');
    }
    return interview
  }

  async update(id: string, updateInterviewerDto: UpdateInterviewerDto) {
    let interviewer = await this.interviewerModel.findById(id)
    if (!interviewer) {
      throw new NotFoundException('interview not found');
    }
    return await this.interviewerModel.findByIdAndUpdate(
      id,
      updateInterviewerDto,
      { new: true }
    ).populate({
      path: 'interviewer',
      select: '-password',
    })
      .populate({
        path: 'job_id',
      })
      .populate('questions.question_id')
  }

  async remove(id: string) {
    let interviewer = await this.interviewerModel.findById(id)
    if (!interviewer) {
      throw new NotFoundException('interviewer not found');
    }
    return await this.interviewerModel.findByIdAndRemove(id).populate({
      path: 'interviewer',
      select: '-password',
    })
      .populate({
        path: 'job_id',
      })
      .populate('questions.question_id')
  }

//   async interviwee(id: string) {
//     let interviews = await this.InterviewModel.find({
//       job_id: id
//     })
//       .populate({
//         path: 'interviewee',
//         select: '-password',
//       })
//       .populate({
//         path: 'job_id',
//       })
//       .populate('questions.question_id');
//     if (interviews.length == 0) {
//       throw new NotFoundException('interviews not found');
//     }
//     return interviews
//   }
  
}


