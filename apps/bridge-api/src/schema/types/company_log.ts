import { objectType, extendType } from 'nexus';

export const company_log = objectType({
  name: 'company_log',
  definition(t) {
    t.model.id();
    t.model.log_date();
    t.model.text();
    t.model.category();
    t.model.severe();
    t.model.company();
  },
});

export const company_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_log();
    t.crud.company_logs({ filtering: true, ordering: true });
  },
});

export const company_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_log();
    t.crud.updateOnecompany_log();
    t.crud.upsertOnecompany_log();
    t.crud.deleteOnecompany_log();

    t.crud.updateManycompany_log();
    t.crud.deleteManycompany_log();
  },
});
