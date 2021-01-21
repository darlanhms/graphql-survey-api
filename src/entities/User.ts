import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import Answer from './Answer';
import Survey from './Survey';

@ObjectType()
@Entity()
export default class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text', { unique: true })
  username: string;

  @Field()
  @Column()
  name: string;

  @Column()
  password: string;

  @Field(() => [Survey], { nullable: true })
  @OneToMany(() => Survey, survey => survey.user)
  surveys?: Array<Survey>;

  @Field(() => [Answer], { nullable: true })
  @OneToMany(() => Answer, answer => answer.user)
  answers?: Array<Answer>;
}
