import { Tag } from '@/tag/tag.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
  ) {}
  async getAllAsync() {
    const tags = await this.tagRepository.find();
    const result = tags.map((tag) => tag.name);
    return { tags: result };
  }
}
