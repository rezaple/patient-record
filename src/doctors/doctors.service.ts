/* eslint-disable @typescript-eslint/camelcase */
import { Injectable, Inject, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './../doctors/doctor.entity';
import { Hospital } from './../hospitals/hospital.entity';

@Injectable()
export class DoctorsService {
    constructor(
        @Inject('DoctorsRepository') private readonly doctorsRepository: typeof Doctor,
        @Inject('HospitalsRepository') private readonly hospitalsRepository: typeof Hospital,
    ) {}
    
    async findAll(): Promise<Doctor[]> {
        const doctors = await this.doctorsRepository.findAll<Doctor>({
            include: [Hospital],
        });
        return doctors;
    }

    async findOne(id: number): Promise<Doctor> {
        const doctor = await this.doctorsRepository.findByPk<Doctor>(id, {
            include: [Hospital],
        });

        return doctor;
    }

    async delete(id: number): Promise<Doctor> {
        const doctor = await this.findOne(id);
        await doctor.destroy();
        return doctor;
    }

    async create(createPostDto: CreateDoctorDto): Promise<Doctor> {
        try {
            const hospitalID : number= createPostDto.hospital_id;
            const hospital = await this.hospitalsRepository.findByPk(hospitalID)
            if(!hospital){
                throw new NotFoundException(hospitalID);
            }

            const data = new Doctor();
            data.name = createPostDto.name;
            data.address = createPostDto.address;
            data.hospital_id = createPostDto.hospital_id;

            return await data.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(
        id: number,
        updateDto: UpdateDoctorDto,
    ): Promise<Doctor> {
        const data = await this.findOne(id);

        data.name = updateDto.name || data.name;
        data.address = updateDto.address || data.address;

        try {
            const result =  await data.save();
            return result
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
