import { Field, ObjectType } from 'type-graphql';
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import User from './User';

@ObjectType()
@Entity()
export default class Survey extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(() => User)
  @ManyToOne(() => User, user => user.surveys)
  user: User;
}
