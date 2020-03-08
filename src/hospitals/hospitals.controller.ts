import {
    Controller,
    Req,
    Body,
    Post,
    Get,
    Param,
    ParseIntPipe,
    Delete,
    Put,
} from '@nestjs/common';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { HospitalsService } from './hospitals.service';
import { Hospital } from './hospital.entity';
import { HospitalDto } from './dto/hospital.dto';
import { Request } from 'express';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospitals')
export class HospitalsController {
    constructor(private readonly hospitalsService: HospitalsService) {}

    @Get()
    findAll(): Promise<HospitalDto[]> {
        return this.hospitalsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Hospital> {
        return this.hospitalsService.findOne(id);
    }

    @Post()
    create(
        @Body() createPostDto: CreateHospitalDto,
    ): Promise<Hospital> {
        return this.hospitalsService.create(createPostDto);
    }

    @Put(':id')
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Req() request: Request,
        @Body() updatePostDto: UpdateHospitalDto,
    ): Promise<Hospital> {
        return this.hospitalsService.update(id, updatePostDto);
    }

    @Delete(':id')
    delete(
        @Param('id', new ParseIntPipe()) id: number,
    ): Promise<Hospital> {
        return this.hospitalsService.delete(id);
    }
}
