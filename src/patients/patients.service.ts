import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Patient } from './patient.entity';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
    constructor(
        @Inject('PatientsRepository') private readonly patientsRepository: typeof Patient,
    ) {}
    
    async findAll(): Promise<Patient[]> {
        const patients = await this.patientsRepository.findAll<Patient>();
        return patients;
    }

    async findOne(id: number): Promise<Patient> {
        const patient = await this.patientsRepository.findByPk<Patient>(id);
        return patient;
    }

    async delete(id: number): Promise<Patient> {
        const patient = await this.findOne(id);
        await patient.destroy();
        return patient;
    }

    async create(createPostDto: CreatePatientDto): Promise<Patient> {
        try {
            const data = new Patient();
            data.name = createPostDto.name;
            data.address = createPostDto.address;

            return await data.save();
        } catch (err) {
            throw new HttpException(err, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async update(
        id: number,
        updateDto: UpdatePatientDto,
    ): Promise<Patient> {
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
