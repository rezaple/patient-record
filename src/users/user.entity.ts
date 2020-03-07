import {
    Table,
    Column,
    DataType,
    Model,
    CreatedAt,
    UpdatedAt
} from 'sequelize-typescript';

@Table({
    tableName: 'users',
})
export class User extends Model<User> {
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
    })
    id: number;

    @Column({
        allowNull: false
    })
    name: string;

    @Column({
        allowNull: false,
        unique: true,
    })
    email: string;

    @Column({
        allowNull: false
    })
    password: string;

    @CreatedAt
    createdAt: Date;

    @UpdatedAt
    updatedAt: Date;
}
