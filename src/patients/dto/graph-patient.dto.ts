import { Field, ObjectType, ID } from 'type-graphql';

@ObjectType()
export class GraphPatientDto {
  @Field(() => ID)
  id: number;

  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  address?: string;
}