import { Doctor } from '../doctor.entity';

export class DoctorDto {
    
    readonly id: number;

    name: string;
    
    address: string;

    hospital_id: number;

    readonly createdAt: Date;

    readonly updatedAt: Date;

    constructor(data: Doctor) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        // eslint-disable-next-line @typescript-eslint/camelcase
        this.hospital_id = data.hospital_id;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
