import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class HospitalArgs {
  @Field(() => ID)
  readonly id?: number;

  @Field()
  readonly name: string;

  @Field()
  readonly address: string;

  @Field()
  readonly lat: number;
  
  @Field()
  readonly lng: number;
}