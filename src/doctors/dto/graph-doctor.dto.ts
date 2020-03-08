import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class Hospital {
  @Field({ nullable: true })
  id: number;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  address?: string;
}

@ObjectType()
export class GraphDoctorDto {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;

  @Field(type => Hospital)
  hospital?: Hospital;

}