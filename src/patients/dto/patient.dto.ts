import { Patient } from '../patient.entity';

export class PatientDto {
    
    readonly id: number;

    name: string;
    
    address: string;

    readonly createdAt: Date;

    readonly updatedAt: Date;

    constructor(data: Patient) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.createdAt = data.createdAt;
        this.updatedAt = data.updatedAt;
    }
}
