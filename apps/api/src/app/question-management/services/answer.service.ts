import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AnswerMapper } from '../mappers/answer.mapper';
import { QuestionModel } from '../model/question.model';
import { AnswerModel } from '../model/answer.model';
import { CreateAnswerDto } from '../dtos/create-answer.dto';
import { AnswerDto } from '../dtos/answer.dto';
import { UpdateAnswerDto } from '../dtos/update-answer.dto';

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(AnswerModel)
    private answerModelRepository: Repository<AnswerModel>
  ) {}

  async addAnswer(dto: CreateAnswerDto): Promise<AnswerDto> {
    try {
      const mappedModel = AnswerMapper.mapCreateDtoToModel(dto);
      const savedModel = await this.answerModelRepository.save(mappedModel);
      return AnswerMapper.mapToDto(savedModel);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async readAll(): Promise<AnswerDto[]> {
    const foundModels = await this.answerModelRepository.find();
    if (!foundModels) {
      return [];
    }
    return foundModels.map((model) => AnswerMapper.mapToDto(model));
  }

  async update(id: string, dto: UpdateAnswerDto): Promise<AnswerDto> {
    const foundAnswer = await this.answerModelRepository.findOne({
      where: { id },
    });
    if (!foundAnswer) {
      throw new NotFoundException();
    }
    try {
      const mappedModel = AnswerMapper.mapUpdateDtoToModel(dto, foundAnswer);
      const savedModel = await this.answerModelRepository.save(mappedModel);
      return AnswerMapper.mapToDto(savedModel);
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async delete(id: string): Promise<void> {
    const deleteResult = await this.answerModelRepository.delete({ id });
    if (deleteResult.affected === 0) {
      throw new BadRequestException();
    }
  }
}
