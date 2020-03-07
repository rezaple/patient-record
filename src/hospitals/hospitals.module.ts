// import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { HospitalsController } from './hospitals.controller';
import { HospitalsService } from './hospitals.service';
import { hospitalsProviders } from './hospitals.providers';
import { HospitalsResolver } from './hospitals.resolver';

@Module({
    imports: [],
    controllers: [HospitalsController],
    providers: [HospitalsService, ...hospitalsProviders, HospitalsResolver],
    exports: [],
})
export class HospitalsModule {}
