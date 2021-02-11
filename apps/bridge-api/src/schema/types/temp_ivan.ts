import { objectType, extendType } from 'nexus';

export const temp_ivan = objectType({
  name: 'temp_ivan',
  definition(t) {
    t.model.id();
    t.model.first_id();
    t.model.second_id();
  },
});

export const temp_ivanQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.temp_ivan();
    t.crud.temp_ivans({ filtering: true, ordering: true });
  },
});

export const temp_ivanMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetemp_ivan();
    t.crud.updateOnetemp_ivan();
    t.crud.upsertOnetemp_ivan();
    t.crud.deleteOnetemp_ivan();

    t.crud.updateManytemp_ivan();
    t.crud.deleteManytemp_ivan();
  },
});
