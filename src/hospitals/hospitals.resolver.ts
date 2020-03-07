import { NotFoundException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { HospitalInput } from './dto/hospital-input.dto';
import { HospitalArgs } from './dto/hospital-args.dto';
import { Hospital } from './hospital.entity';
import { HospitalsService } from './hospitals.service';
import { CreateGraphHospitalDto } from './dto/create-graph-hospital.dto';

@Resolver(of => Hospital)
export class HospitalsResolver {
  constructor(private readonly hospitalsService: HospitalsService) {}
  
  @Query(() => String)
  async hello(@Args({ name: 'name', type: () => String }) name: string) {
    return `Hello => ${name}`;
  }
//   @Query(() => Hospital)
//   async hospital(@Args('id') id: number): Promise<Hospital> {
//     const hospital = await this.hospitalsService.findOne(id);
//     if (!hospital) {
//       throw new NotFoundException(id);
//     }
//     return hospital;
//   }

    @Query(() => [CreateGraphHospitalDto])
    async hospitals() {
        return this.hospitalsService.findAll();
    }

//   @Mutation(() => Hospital)
//   async addHospital(
//     @Args('newHospitalData') newHospitalData: HospitalInput,
//   ): Promise<Hospital> {
//     const Hospital = await this.hospitalsService.create(newHospitalData);
//     return Hospital;
//   }


}