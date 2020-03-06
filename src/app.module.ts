import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';

import { config} from '../config';

import { HospitalsModule } from './hospitals/hospitals.module';
import { Hospital } from './hospitals/hospital.entity';
import { Doctor } from './doctors/doctor.entity';

const {database} = config;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.database,
      synchronize: true,
      host: database.host,
      models: [Hospital, Doctor],
    })
  ,HospitalsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
