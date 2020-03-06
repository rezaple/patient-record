import { Hospital } from '../hospital.entity';

export class HospitalDto {
    
    readonly id: number;

    name: string;
    
    address: string;
    
    lat: number;

    lng: number;

    readonly createdAt: Date;

    readonly updatedAt: Date;

    constructor(hospital: Hospital) {
        this.id = hospital.id;
        this.name = hospital.name;
        this.address = hospital.address;
        this.lat = hospital.lat;
        this.lng = hospital.lng;
        this.createdAt = hospital.createdAt;
        this.updatedAt = hospital.updatedAt;
    }
}
