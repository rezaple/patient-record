import { Field, ObjectType, ID, Float } from 'type-graphql';


@ObjectType()
export class Doctor {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;
}

@ObjectType()
export class GraphHospitalDto {
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

  @Field(type => [Doctor])
  doctors?: [Doctor];

}