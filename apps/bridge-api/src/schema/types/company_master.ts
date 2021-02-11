import { objectType, extendType } from 'nexus';

export const company_master = objectType({
  name: 'company_master',
  definition(t) {
    t.model.comp_id();
    t.model.comp_username();
    t.model.comp_password();
    t.model.comp_title();
    t.model.comp_currency();
    t.model.comp_logo();
    t.model.comp_paypalemail();
    t.model.comp_background();
    t.model.login_timeout();
    t.model.default_page();
  },
});

export const company_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_master();
    t.crud.company_masters({ filtering: true, ordering: true });
  },
});

export const company_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_master();
    t.crud.updateOnecompany_master();
    t.crud.upsertOnecompany_master();
    t.crud.deleteOnecompany_master();

    t.crud.updateManycompany_master();
    t.crud.deleteManycompany_master();
  },
});
