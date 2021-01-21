import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Question from './Question';
import User from './User';

@ObjectType()
@Entity()
export default class Survey extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  created: number;

  @Field()
  @Column()
  closes: number;

  @Field(() => User)
  @ManyToOne(() => User, user => user.surveys)
  user: User;

  @Field(() => [Question])
  @OneToMany(() => Question, question => question.survey)
  questions: Array<Question>;
}
