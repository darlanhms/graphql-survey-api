import { Resolver, Query, Mutation, Arg } from 'type-graphql';
import Survey from '../entities/Survey';
import User from '../entities/User';
import CreateSurveyInput from '../inputs/survey/CreateSurvey';

@Resolver()
export default class SurveyResolver {
  @Query(() => [Survey])
  async surveys(): Promise<Array<Survey>> {
    const surveys = await Survey.find({ relations: ['user'] });

    return surveys;
  }

  @Mutation(() => Survey)
  async createSurvey(
    @Arg('survey') { name, description, user }: CreateSurveyInput,
  ): Promise<Survey> {
    const userObject = await User.findOne({ where: { id: user } });

    if (!userObject) {
      throw new Error('Usuário não encontrado');
    }

    const survey = Survey.create({
      name,
      description,
    });

    survey.user = userObject;

    survey.save();

    return survey;
  }
}
