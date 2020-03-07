import { IsNotEmpty, IsLatitude, IsLongitude } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateHospitalDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    address: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsLatitude()
    lat: number;

    @ApiProperty()
    @IsNotEmpty()
    @IsLongitude()
    lng: number;
}
