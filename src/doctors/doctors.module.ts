import { Module } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { DoctorsController } from './doctors.controller';
import { doctorsProviders } from './doctors.providers';
import { hospitalsProviders } from '../hospitals/hospitals.providers';
import {DoctorsResolver} from './doctors.resolver';

@Module({
  providers: [DoctorsService, ...doctorsProviders,...hospitalsProviders, DoctorsResolver],
  controllers: [DoctorsController]
})
export class DoctorsModule {}
