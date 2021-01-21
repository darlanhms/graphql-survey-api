import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import { hash } from 'bcrypt';
import User from '../entities/User';

import CreateUserInput from '../inputs/user/CreateUser';

@Resolver()
export default class UserResolver {
  @Query(() => User, { nullable: true })
  async user(@Arg('id') id: number): Promise<User | undefined> {
    const user = await User.findOne({ where: { id }, relations: ['surveys'] });

    return user;
  }

  @Mutation(() => User)
  async createUser(@Arg('user') { name, username, password }: CreateUserInput): Promise<User> {
    const hashedPassword = await hash(password, 12);

    const user = await User.create({
      name,
      username,
      password: hashedPassword,
    }).save();

    return user;
  }
}
