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
import { CreateHospitalDto } from './dt./dto/create-hospital.dto';
import { HospitalsService } from './hospitals.service';
import { Hospital as HospitalEntity } from './hospital.entity';
import { HospitalDto } from './dto/hospital.dto';
import { Request } from 'express';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('Hospitals')
export class HospitalsController {
    constructor(private readonly hospitalsService: HospitalsService) {}

    @Get()
    findAll(): Promise<HospitalDto[]> {
        return this.hospitalsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', new ParseIntPipe()) id: number): Promise<HospitalDto> {
        return this.hospitalsService.findOne(id);
    }

    @Post()
    create(
        @Body() createPostDto: CreateHospitalDto,
        @Req() request,
    ): Promise<HospitalEntity> {
        return this.hospitalsService.create(request.user.id, createPostDto);
    }

    @Put(':id')
    update(
        @Param('id', new ParseIntPipe()) id: number,
        @Req() request: Request,
        @Body() updatePostDto: UpdateHospitalDto,
    ): Promise<HospitalEntity> {
        return this.hospitalsService.update(id, request.user.id, updatePostDto);
    }

    @Delete(':id')
    delete(
        @Param('id', new ParseIntPipe()) id: number,
        @Req() request: Request,
    ): Promise<HospitalEntity> {
        return this.hospitalsService.delete(id, request.user.id);
    }
}
