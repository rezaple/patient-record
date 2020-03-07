import {
    Table,
    Column,
    DataType,
    Model,
    CreatedAt,
    UpdatedAt,
    HasMany
} from 'sequelize-typescript';
import { Record } from '../records/record.entity';

@Table({
    tableName: 'patients',
})
export class Patient extends Model<Patient> {
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

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @HasMany(() => Record)
    records: Record[];
}
