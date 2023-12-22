
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FavouriteInterview } from '../entities/favourite.entity';
import { CreateFavoriteInterviewDto } from '../dtos/create-favourite.dto';
import { UpdateFavoriteInterviewDto } from '../dtos/update-favourite.dto';

@Injectable()
export class FavouriteInterviewService {
  constructor(
    @InjectModel(FavouriteInterview.name) private favouriteInterviewModel: Model<FavouriteInterview>,
  ) {}

  async create(createFavoriteInterviewDto: CreateFavoriteInterviewDto): Promise<FavouriteInterview> {
    const createdFavoriteInterview = await this.favouriteInterviewModel.create(createFavoriteInterviewDto);
    return createdFavoriteInterview;
  }

  async findAll(): Promise<FavouriteInterview[]> {
    return await this.favouriteInterviewModel.find()
      .populate({
        path: 'interviewer',
        select: '-password',
      })

      .populate({
        path: 'favoriteInterviews',
        select: '-password',
      })



      .exec();
  }
  
  async findOne(id: string): Promise<FavouriteInterview> {
    const favoriteInterview = await this.favouriteInterviewModel.findById(id)
    .populate({
      path: 'interviewer',
      select: '-password',
    })
    .populate({
      path: 'favoriteInterviews',
      select: '-password',
    })
  
    .exec();
    if (!favoriteInterview) {
      throw new NotFoundException('Favorite interview not found');
    }
    return favoriteInterview;
  }

  async update(id: string, updateFavoriteInterviewDto: UpdateFavoriteInterviewDto): Promise<FavouriteInterview> {
    const favoriteInterview = await this.favouriteInterviewModel.findByIdAndUpdate(
      id,
      updateFavoriteInterviewDto,
      { new: true },
    )
    .populate({
      path: 'interviewer',
      select: '-password',
    })

    .populate({
      path: 'favoriteInterviews',
      select: '-password',
    })

    .exec();

    if (!favoriteInterview) {
      throw new NotFoundException('Favorite interview not found');
    }

    return favoriteInterview;
  }

  async remove(id: string): Promise<FavouriteInterview> {
    const favoriteInterview = await this.favouriteInterviewModel.findByIdAndRemove(id).exec();
    
    if (!favoriteInterview) {
      throw new NotFoundException('Favorite interview not found');
    }

    return favoriteInterview;
  }
}
