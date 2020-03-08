import { InputType, Field } from 'type-graphql';

@InputType()
export class DoctorInput {
  @Field()
  readonly name: string;
  
  @Field()
  readonly address: string;

  @Field()
  readonly hospital_id: number;
}