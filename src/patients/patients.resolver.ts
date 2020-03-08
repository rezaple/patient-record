import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Patient } from './patient.entity';
import { PatientsService } from './patients.service';
import { Int } from 'type-graphql';
import { GqlAuthGuard } from 'src/auth/graph.auth.guard';
import { InputPatient } from './dto/input-patient.dto';
import { GraphPatientDto } from './dto/graph-patient.dto';

@Resolver(of => Patient)
export class PatientsResolver {
    constructor(private readonly patientsService: PatientsService) {}

    @Query(() => GraphPatientDto)
    @UseGuards(new GqlAuthGuard())
    async patient(@Args('id') id: number): Promise<Patient> {
      const patient = await this.patientsService.findOne(id);
      if (!patient) {
        throw new NotFoundException(id);
      }
      return patient;
    }

    @Query(() => [GraphPatientDto])
    @UseGuards(new GqlAuthGuard())
    async patients() {
        return this.patientsService.findAll();
    }

    @Mutation(()=>GraphPatientDto)
    @UseGuards(new GqlAuthGuard())
    async addPatient(
      @Args('name') name:string,
      @Args('address') address: string
    ): Promise<Patient> {
      const args = {name, address}
      const patient = await this.patientsService.create(args);
      return patient;
    }

    @Mutation(()=>GraphPatientDto)
    @UseGuards(new GqlAuthGuard())
    async updatePatient(
      @Args({ name: 'id', type: () => Int }) id: number,
      @Args({ name: 'data', type: () => InputPatient }) args: InputPatient,
    ): Promise<Patient> {
      const patient = await this.patientsService.update(id,args);
      return patient;
    }

    @Mutation(()=>GraphPatientDto)
    @UseGuards(new GqlAuthGuard())
    async deletePatient(
      @Args({ name: 'id', type: () => Int }) id: number
    ): Promise<Patient> {
      const patient = await this.patientsService.delete(id);
      return patient;
    }
}