import { Module } from '@nestjs/common';
import {SequelizeModule} from '@nestjs/sequelize';

import { config} from '../config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

const {database} = config;

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      port: database.port,
      username: database.username,
      password: database.password,
      database: database.password,
      synchronize: true,
      host: database.host,
      models: [],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
