import {
    Table,
    PrimaryKey,
    AutoIncrement,
    Column,
    DataType,
    Model,
    CreatedAt,
    UpdatedAt,
    BelongsTo,
    ForeignKey,
    HasMany
} from 'sequelize-typescript';
import { Hospital } from '../hospitals/hospital.entity';
import { Record } from '../records/record.entity';

@Table({
    tableName: 'doctors',
})
export class Doctor extends Model<Doctor> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.BIGINT)
    id: number;

    @ForeignKey(() => Hospital)
    @Column({
        type: DataType.BIGINT,
        field: 'hospital_id',
    })
    hospital_id: number;

    @Column
    name: string;

    @Column
    address: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;

    @BelongsTo(() => Hospital)
    hospital: Hospital[];

    @HasMany(() => Record)
    records: Record[];
}
