import { Length } from 'class-validator';
import { InputType, Field } from 'type-graphql';

@InputType()
export default class CreateSurveyInput {
  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  @Length(1, 255)
  description: string;

  @Field()
  user: number;
}
