import { objectType, extendType } from 'nexus';

export const ztest_db_class = objectType({
  name: 'ztest_db_class',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.description();
    t.model.number();
  },
});

export const ztest_db_classQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ztest_db_class();
    t.crud.ztest_db_classes({ filtering: true, ordering: true });
  },
});

export const ztest_db_classMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneztest_db_class();
    t.crud.updateOneztest_db_class();
    t.crud.upsertOneztest_db_class();
    t.crud.deleteOneztest_db_class();

    t.crud.updateManyztest_db_class();
    t.crud.deleteManyztest_db_class();
  },
});
