import {
    Controller,
    Body,
    Post,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Put,
} from '@nestjs/common';
import { PatientsService } from './patients.service';
import { PatientDto } from './dto/patient.dto';
import { Patient } from './patient.entity';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patients')
export class PatientsController {
    constructor(private readonly patientsService: PatientsService) {}

    @Get()
    findAll(): Promise<PatientDto[]> {
        return this.patientsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Patient> {
        return this.patientsService.findOne(id);
    }

    @Post()
    create(
        @Body() createPostDto: CreatePatientDto,
    ): Promise<Patient> {
        return this.patientsService.create(createPostDto);
    }

    @Put(':id')
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updatePostDto: UpdatePatientDto,
    ): Promise<Patient> {
        return this.patientsService.update(id, updatePostDto);
    }

    @Delete(':id')
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<Patient> {
        return this.patientsService.delete(id);
    }
}
