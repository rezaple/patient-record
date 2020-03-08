import { Field, ObjectType, ID } from 'type-graphql';
import { IsNotEmpty } from 'class-validator';

@ObjectType()
export class UserDTO {
  @IsNotEmpty()
  @Field()
  email: string;

  @IsNotEmpty()
  @Field()
  password: string;
}

@ObjectType()
export class UserRO {
  @Field()
  id: number;

  @Field()
  email: string;

  @Field({
    nullable: true
  })
  createdAt: Date;

  @Field({
    nullable: true
  })
  token?: string;
}