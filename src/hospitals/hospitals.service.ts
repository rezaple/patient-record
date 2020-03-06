import { Injectable, Inject } from '@nestjs/common';
import { HospitalDto } from './dto/hospital.dto';
import { Hospital } from './hospital.entity';

@Injectable()
export class HospitalsService {
  constructor(
    @Inject('HospitalsRepository') private readonly hospitalsRepository: typeof Hospital) {}

    async findAll(): Promise<Hospital[]> {
        const posts = await this.hospitalsRepository.findAll<Hospital>({
            include: [Doctor],
        });
        return posts.map(post => {
            return new HospitalDto(post);
        });
    }

    async delete(): Promise<Hospital[]> {
        return this.hospitalsRepository.findAll<Hospital>();
    }

    async create(): Promise<Hospital[]> {
        return this.hospitalsRepository.findAll<Hospital>();
    }

    async update(): Promise<Hospital[]> {
        return this.hospitalsRepository.findAll<Hospital>();
    }

    async findOne(): Promise<Hospital[]> {
        return this.hospitalsRepository.findAll<Hospital>();
    }
}