import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Question from './Question';
import User from './User';

@ObjectType()
@Entity()
export default class Answer extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  answered: number;

  @Field()
  @Column()
  isDescriptive: boolean;

  @Field(() => Question)
  @ManyToOne(() => Question, survey => survey.answers)
  question: Question;

  @Field(() => User)
  @ManyToOne(() => User, user => user.answers)
  user: User;
}
