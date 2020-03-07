import {
    Table,
    Column,
    DataType,
    Model,
    CreatedAt,
    UpdatedAt,
    ForeignKey
} from 'sequelize-typescript';

import { Doctor } from '../doctors/doctor.entity';
import { Patient } from '../patients/patient.entity';

@Table({
    tableName: 'records',
})
export class Record extends Model<Record> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    id: number;

    @ForeignKey(() => Doctor)
    @Column({
        type: DataType.BIGINT,
        field: 'doctor_id',
    })
    doctor_id: number;

    @ForeignKey(() => Patient)
    @Column({
        type: DataType.BIGINT,
        field: 'patient_id',
    })
    patient_id: number;

    @Column({
        type: DataType.TEXT
    })
    description: string;

    @Column
    date: Date;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}
