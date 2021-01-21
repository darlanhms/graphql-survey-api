import { Length } from 'class-validator';
import { Field, InputType } from 'type-graphql';

@InputType()
export default class CreateUserInput {
  @Field()
  @Length(1, 255)
  username: string;

  @Field()
  @Length(1, 255)
  name: string;

  @Field()
  password: string;
}
