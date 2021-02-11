import { objectType, extendType } from 'nexus';

export const app_before_after = objectType({
  name: 'app_before_after',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.before_img();
    t.model.after_img();
    t.model.pass_key();
  },
});

export const app_before_afterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.app_before_after();
    t.crud.app_before_afters({ filtering: true, ordering: true });
  },
});

export const app_before_afterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneapp_before_after();
    t.crud.updateOneapp_before_after();
    t.crud.upsertOneapp_before_after();
    t.crud.deleteOneapp_before_after();

    t.crud.updateManyapp_before_after();
    t.crud.deleteManyapp_before_after();
  },
});
