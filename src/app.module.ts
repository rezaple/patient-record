import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';
import { GraphQLModule } from '@nestjs/graphql';

import { config} from '../config';

import { HospitalsModule } from './hospitals/hospitals.module';
import { AuthModule } from './auth/auth.module';
import { PatientsModule } from './patients/patients.module';
import { UsersModule } from './users/users.module';
import { DoctorsModule } from './doctors/doctors.module';
import { RecordsModule } from './records/records.module';

import { User } from './users/user.entity';
import { Hospital } from './hospitals/hospital.entity';
import { Doctor } from './doctors/doctor.entity';
import { Patient } from './patients/patient.entity';
import { Record } from './records/record.entity';

import { AppController } from './app.controller';

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
      models: [Hospital, Doctor, User, Record, Patient],
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: ({ req }) => ({ req }),
    }),
    HospitalsModule, AuthModule, PatientsModule, UsersModule, DoctorsModule, RecordsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
