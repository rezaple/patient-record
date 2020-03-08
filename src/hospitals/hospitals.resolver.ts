import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import { Int } from 'type-graphql';

import { Hospital } from './hospital.entity';
import { HospitalsService } from './hospitals.service';
import { HospitalInput } from './dto/hospital-input.dto';
import { GraphHospitalDto } from './dto/graph-hospital.dto';
import { GqlAuthGuard } from 'src/auth/graph.auth.guard';

@Resolver(of => Hospital)
export class HospitalsResolver {
    constructor(private readonly hospitalsService: HospitalsService) {}

    @Query(() => GraphHospitalDto)
    @UseGuards(new GqlAuthGuard())
    async hospital(@Args('id') id: number): Promise<Hospital> {
      const hospital = await this.hospitalsService.findOne(id);
      if (!hospital) {
        throw new NotFoundException(id);
      }
      return hospital;
    }

    @Query(() => [GraphHospitalDto])
    @UseGuards(new GqlAuthGuard())
    async hospitals() {
        return this.hospitalsService.findAll();
    }

    @Mutation(()=>GraphHospitalDto)
    @UseGuards(new GqlAuthGuard())
    async addHospital(
      @Args({ name: 'data', type: () => HospitalInput }) args: HospitalInput,
    ): Promise<Hospital> {
      const hospital = await this.hospitalsService.create(args);
      return hospital;
    }

    @Mutation(()=>GraphHospitalDto)
    @UseGuards(new GqlAuthGuard())
    async updateHospital(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args({ name: 'data', type: () => HospitalInput }) args: HospitalInput,
    ): Promise<Hospital> {
      const hospital = await this.hospitalsService.update(id,args);
      return hospital;
    }

    @Mutation(()=>GraphHospitalDto)
    @UseGuards(new GqlAuthGuard())
    async deleteHospital(
      @Args({ name: 'id', type: () => Int }) id: number
    ): Promise<Hospital> {
      const hospital = await this.hospitalsService.delete(id);
      return hospital;
    }
}