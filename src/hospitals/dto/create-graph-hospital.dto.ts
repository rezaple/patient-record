import { Field, ObjectType, ID, Float } from 'type-graphql';

@ObjectType()
export class CreateGraphHospitalDto {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  lat?: number;

  @Field({ nullable: true })
  lng?: number;

}