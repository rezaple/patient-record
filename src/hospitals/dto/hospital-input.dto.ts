import { InputType, Field } from 'type-graphql';

@InputType()
export class HospitalInput {
  @Field()
  readonly name: string;
  
  @Field()
  readonly address: string;

  @Field()
  readonly lat: number;

  @Field()
  readonly lng: number;
}