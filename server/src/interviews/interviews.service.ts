import {
  Injectable,
  NotFoundException,
  ConflictException,
  BadRequestException,
} from '@nestjs/common';
import { CreateInterviewDto } from './dto/create-interview.dto';
import { UpdateInterviewDto } from './dto/update-interview.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Interview } from './entities/interview.entity';
import { Model } from 'mongoose';
import { QuestionsService } from '../questions/questions.service';
//imagekit service
import { ImageKitService } from '../utils/imagekit.service';
@Injectable()
export class InterviewsService {
  constructor(
    @InjectModel('Interview') private InterviewModel: Model<Interview>,
    private questionsService: QuestionsService,
    private readonly imageKitService: ImageKitService,
  ) {}

  async create(
    createInterviewDto: CreateInterviewDto,
    // video: Express.Multer.File
  ) {
    // Check if the question exists

    const question = await this.questionsService.findOne(
      createInterviewDto.question_id,
    );
    if (!question) {
      throw new NotFoundException('Question not found');
    }

    // Check if the interview exists
    const interview = await this.findQuestionAndJob(
      createInterviewDto.interviewee,
      question?.job_id?._id,
    );
    // Check if the question is already submitted for this interview
    if (
      interview?.questions?.some(
        (q) => q.question_id._id == createInterviewDto.question_id,
      )
    ) {
      throw new ConflictException(
        'You have already submitted a video for this question.',
      );
    }

    //uploading video to imagekit
    // createInterviewDto.video_url = await this.imageKitService.uploadImage(video, video.originalname)
    if (interview) {
      // Update the existing interview with the new question and video URL
      return await this.InterviewModel.findByIdAndUpdate(
        interview._id,
        {
          $push: {
            questions: {
              question_id: createInterviewDto.question_id,
              video_url: createInterviewDto.video_url,
            },
          },
        },
        {
          new: true,
        },
      );
    }

    return await this.InterviewModel.create({
      interviewee: createInterviewDto.interviewee,
      interviewer: createInterviewDto.interviewer,
      job_id: createInterviewDto.job_id,
      

      questions: [
        {
          question_id: createInterviewDto.question_id,
          video_url: createInterviewDto.video_url,
        },
      ],
    });
  }

  async findAll() {
    let interviews = await this.InterviewModel.find()
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })
      .populate({
        path: 'interviewer',
        select: '-password',
      })

      .populate('questions.question_id');

    if (interviews.length == 0) {
      throw new NotFoundException('interviews not found');
    }
    return interviews;
  }

  async findQuestionAndJob(interviewee: string, job_id: string) {
    let interview = await this.InterviewModel.findOne({
      job_id,
      interviewee,
    })
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })
      .populate('questions.question_id');
    return interview;
  }

  async findOne(id: string) {
    let interview = await this.InterviewModel.findById(id)
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })

      .populate({
        path: 'interviewer',
        select: '-password',
      })

      .populate('questions.question_id');
    if (!interview) {
      throw new NotFoundException('interview not found');
    }
    return interview;
  }

  async update(id: string, updateInterviewDto: UpdateInterviewDto) {
    let interview = await this.InterviewModel.findById(id);
    if (!interview) {
      throw new NotFoundException('interview not found');
    }
    return await this.InterviewModel.findByIdAndUpdate(id, updateInterviewDto, {
      new: true,
    })
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })

      .populate({
        path: 'interviewer',
        select: '-password',
      })

      .populate('questions.question_id');
  }

  async remove(id: string) {
    let interview = await this.InterviewModel.findById(id);
    if (!interview) {
      throw new NotFoundException('interview not found');
    }
    return await this.InterviewModel.findByIdAndRemove(id)
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })
      .populate({
        path: 'interviewer',
        select: '-password',
      })

      .populate('questions.question_id');
  }

  async interviwee(id: string) {
    let interviews = await this.InterviewModel.find({
      job_id: id,
    })
      .populate({
        path: 'interviewee',
        select: '-password',
      })
      .populate({
        path: 'job_id',
      })
      .populate({
        path: 'interviewer',
        select: '-password',
      })
      .populate('questions.question_id');
    if (interviews.length == 0) {
      throw new NotFoundException('interviews not found');
    }
    return interviews;
  }

  async findInterviewsByTimeRange(timeRange: string): Promise<Interview[]> {
    const currentDate = new Date();
  
    switch (timeRange) {
      case 'lastHour':
        currentDate.setHours(currentDate.getHours() - 1);
        break;
      case 'today':
        currentDate.setHours(0, 0, 0, 0);
        break;
      case 'thisWeek':
        currentDate.setDate(currentDate.getDate() - currentDate.getDay());
        currentDate.setHours(0, 0, 0, 0);
        break;
      case 'thisMonth':
        currentDate.setDate(1);
        currentDate.setHours(0, 0, 0, 0);
        break;
      case 'thisYear':
        currentDate.setMonth(0, 1);
        currentDate.setHours(0, 0, 0, 0);
        break;
      case 'recent':
        return await this.InterviewModel.find({})
          .sort({ createdAt: -1 })
          .populate({
            path: 'interviewee',
            select: '-password',
          })
          .populate({
            path: 'job_id',
          })
          .populate({
            path: 'interviewer',
            select: '-password',
          })
          .populate('questions.question_id');

          case 'byIntervieweeName':
            return await this.InterviewModel.find({})
              .sort({ 'interviewee.name': 1 }) 
              .populate({
                path: 'interviewee',
                select: '-password',
              })
              .populate({
                path: 'job_id',
              })
              .populate({
                path: 'interviewer',
                select: '-password',
              })
              .populate('questions.question_id');
      
  
      
          default:
            throw new NotFoundException('Invalid filter');
        }
      
        const interviews = await this.InterviewModel.find({
          createdAt: { $gte: currentDate },
        })
          .populate({
            path: 'interviewee',
            select: '-password',
          })
          .populate({
            path: 'job_id',
          })
          .populate({
            path: 'interviewer',
            select: '-password',
          })
          .populate('questions.question_id');
      
        if (interviews.length === 0) {
          throw new NotFoundException('Interviews not found');
        }
      
        return interviews;
      }

            
        
}
