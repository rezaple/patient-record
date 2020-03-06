import { IsLatitude, IsLongitude } from 'class-validator';

export class UpdateHospitalDto {
    readonly name: string;

    readonly address: string;

    @IsLatitude()
    readonly lat: number;

    @IsLongitude()
    readonly lng: number;
}
