import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';
import { Hospital } from './hospital.entity';
import { Doctor } from './../doctors/doctor.entity';

@Injectable()
export class HospitalsService {
    constructor(
        @Inject('HospitalsRepository') private readonly hospitalsRepository: typeof Hospital
    ) {}

    async findAll(): Promise<Hospital[]> {
        const hospitals = await this.hospitalsRepository.findAll<Hospital>({
            include: [Doctor],
        });
        return hospitals;
    }

    async findOne(id: number): Promise<Hospital> {
        const hospital = await this.hospitalsRepository.findByPk<Hospital>(id, {
            include: [Doctor],
        });

        return hospital;
    }

    async delete(id: number): Promise<Hospital> {
        const hospital = await this.findOne(id);
        await hospital.destroy();
        return hospital;
    }

    async create(createPostDto: CreateHospitalDto): Promise<Hospital> {
        const data = new Hospital();
        data.name = createPostDto.name;
        data.address = createPostDto.address;
        data.lat = createPostDto.lat;
        data.lng = createPostDto.lng;

        try {
            return await data.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(
        id: number,
        updateDto: UpdateHospitalDto,
    ): Promise<Hospital> {
        const data = await this.findOne(id);

        data.name = updateDto.name || data.name;
        data.address = updateDto.address || data.address;
        data.lat = updateDto.lat || data.lat;
        data.lng = updateDto.lng || data.lng;

        try {
            const result =  await data.save();
            return result
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}