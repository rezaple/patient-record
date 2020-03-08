import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { DoctorInput } from './dto/doctor-input.dto';
import { Doctor } from './doctor.entity';
import { DoctorsService } from './doctors.service';
import { GraphDoctorDto } from './dto/graph-doctor.dto';
import { Int } from 'type-graphql';

@Resolver(of => Doctor)
export class DoctorsResolver {
    constructor(private readonly doctorsService: DoctorsService) {}

    @Query(() => GraphDoctorDto)
    async doctor(@Args('id') id: number): Promise<Doctor> {
      const doctor = await this.doctorsService.findOne(id);
      if (!doctor) {
        throw new NotFoundException(id);
      }
      return doctor;
    }

    @Query(() => [GraphDoctorDto])
    async doctors() {
        return this.doctorsService.findAll();
    }

    @Mutation(()=>GraphDoctorDto)
    async addDoctor(
      @Args({ name: 'data', type: () => DoctorInput }) args: DoctorInput,
    ): Promise<Doctor> {
      const doctor = await this.doctorsService.create(args);
      return doctor;
    }

    @Mutation(()=>GraphDoctorDto)
    async updateDoctor(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args({ name: 'data', type: () => DoctorInput }) args: DoctorInput,
    ): Promise<Doctor> {
      const doctor = await this.doctorsService.update(id,args);
      return doctor;
    }

    @Mutation(()=>GraphDoctorDto)
    async deleteDoctor(
      @Args({ name: 'id', type: () => Int }) id: number
    ): Promise<Doctor> {
      const doctor = await this.doctorsService.delete(id);
      return doctor;
    }


}