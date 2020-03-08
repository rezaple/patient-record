import { InputType, Field } from 'type-graphql';

@InputType()
export class InputPatient {
  @Field()
  readonly name: string;
  
  @Field()
  readonly address: string;
}