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
import { DoctorsService } from './doctors.service';
import { DoctorDto } from './dto/doctor.dto';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { Doctor } from './doctor.entity';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
    constructor(private readonly doctorsService: DoctorsService) {}

    @Get()
    findAll(): Promise<DoctorDto[]> {
        return this.doctorsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Doctor> {
        return this.doctorsService.findOne(id);
    }

    @Post()
    create(
        @Body() createPostDto: CreateDoctorDto,
    ): Promise<Doctor> {
        return this.doctorsService.create(createPostDto);
    }

    @Put(':id')
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Body() updatePostDto: UpdateDoctorDto,
    ): Promise<Doctor> {
        return this.doctorsService.update(id, updatePostDto);
    }

    @Delete(':id')
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<Doctor> {
        return this.doctorsService.delete(id);
    }
}
