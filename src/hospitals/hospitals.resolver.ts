import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HospitalInput } from './dto/hospital-input.dto';
import { Hospital } from './hospital.entity';
import { HospitalsService } from './hospitals.service';
import { GraphHospitalDto } from './dto/graph-hospital.dto';
import { Int } from 'type-graphql';

@Resolver(of => Hospital)
export class HospitalsResolver {
    constructor(private readonly hospitalsService: HospitalsService) {}

    @Query(() => GraphHospitalDto)
    async hospital(@Args('id') id: number): Promise<Hospital> {
      const hospital = await this.hospitalsService.findOne(id);
      if (!hospital) {
        throw new NotFoundException(id);
      }
      return hospital;
    }

    @Query(() => [GraphHospitalDto])
    async hospitals() {
        return this.hospitalsService.findAll();
    }

    @Mutation(()=>GraphHospitalDto)
    async addHospital(
      @Args({ name: 'data', type: () => HospitalInput }) args: HospitalInput,
    ): Promise<Hospital> {
      const hospital = await this.hospitalsService.create(args);
      return hospital;
    }

    @Mutation(()=>GraphHospitalDto)
    async updateHospital(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args({ name: 'data', type: () => HospitalInput }) args: HospitalInput,
    ): Promise<Hospital> {
      const hospital = await this.hospitalsService.update(id,args);
      return hospital;
    }

    @Mutation(()=>GraphHospitalDto)
    async deleteHospital(
      @Args({ name: 'id', type: () => Int }) id: number
    ): Promise<Hospital> {
      const hospital = await this.hospitalsService.delete(id);
      return hospital;
    }


}