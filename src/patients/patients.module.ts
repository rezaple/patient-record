import { Module } from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientsController } from './patients.controller';
import { patientsProviders } from './patients.providers';
import { PatientsResolver } from './patients.resolver';

@Module({
  providers: [PatientsService,...patientsProviders, PatientsResolver],
  controllers: [PatientsController]
})
export class PatientsModule {}
