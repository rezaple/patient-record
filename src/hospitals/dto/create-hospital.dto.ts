import { IsNotEmpty, IsLatitude, IsLongitude } from 'class-validator';

export class CreateHospitalDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    @IsLatitude()
    readonly lat: number;

    @IsNotEmpty()
    @IsLongitude()
    readonly lng: number;
}
