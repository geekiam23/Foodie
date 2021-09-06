import {Factory} from 'fishery';
import faker from 'faker';
import {Tag} from 'types/recipe';

export default Factory.define<Tag>(() => ({
  name: faker.lorem.word(),
  // __typename: faker.lorem.word(),
}));
