import {Factory} from 'fishery';
import faker from 'faker';
import {Recipe} from 'types/recipe';
import tagFactory from './tag';

export default Factory.define<Recipe>(({sequence}) => ({
  id: sequence,
  title: faker.lorem.word(),
  summary: faker.lorem.words(),
  servings: faker.datatype.number(),
  imageUrl: faker.image.imageUrl(),
  cuisines: tagFactory.buildList(2),
  occasions: tagFactory.buildList(2),
  diets: tagFactory.buildList(2),
  dishTypes: tagFactory.buildList(2),
}));
