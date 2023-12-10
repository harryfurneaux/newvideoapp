import { Controller, Get, Post, UseGuards, Body, Patch, Param, Delete } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';

// JWT auth guard
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
//Role Guard
import { RolesGuard } from '../auth/role-base-auth/role.guard';
import { Roles } from '../auth/role-base-auth/roles.decorator'
import { ROLE } from '../users/enums/users.enums'

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) { }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(ROLE.INTERVIEWER)
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  findAll() {
    return this.questionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: UpdateQuestionDto) {
    return this.questionsService.update(id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(id);
  }

  @Get('job/:id')
  jobQuestions(@Param('id') id: string) {
    return this.questionsService.jobQuestions(id);
  }
}
