import {
    Table,
    PrimaryKey,
    AutoIncrement,
    Column,
    DataType,
    Model,
    CreatedAt,
    UpdatedAt,
    HasMany
} from 'sequelize-typescript';
import { Doctor } from '../doctors/doctor.entity';

@Table({
    tableName: 'hospitals',
})
export class Hospital extends Model<Hospital> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    id: number;

    @Column
    name: string;

    @Column
    address: string;

    @Column(DataType.DOUBLE)
    lat: number;

    @Column(DataType.DOUBLE)
    lng: number;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @HasMany(() => Doctor)
    doctors: Doctor[];
}
