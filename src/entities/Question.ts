import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import Alternative from './Alternative';
import Answer from './Answer';
import Survey from './Survey';

@ObjectType()
@Entity()
export default class Question extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  isDescriptive: boolean;

  @Field(() => Survey)
  @ManyToOne(() => Survey, survey => survey.questions)
  survey: Survey;

  @Field(() => [Alternative], { nullable: true })
  @OneToMany(() => Alternative, alternative => alternative.question)
  alternatives?: Array<Alternative>;

  @Field(() => [Answer], { nullable: true })
  @OneToMany(() => Answer, answer => answer.question)
  answers?: Array<Answer>;
}
