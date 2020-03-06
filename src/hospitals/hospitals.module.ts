// import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { hospitalsProviders } from './hospitals.providers';

@Module({
    imports: [],
    controllers: [HospitalsController],
    providers: [HospitalsService, ...hospitalsProviders],
    exports: [],
})
export class HospitalsModule {}
