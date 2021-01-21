import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Question from './Question';

@ObjectType()
@Entity()
export default class Alternative extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @Field(() => Question)
  @ManyToOne(() => Question, question => question.alternatives)
  question: Question;
}
