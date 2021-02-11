import { objectType, extendType } from 'nexus';

export const user_master = objectType({
  name: 'user_master',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.fname();
    t.model.lname();
    t.model.address();
    t.model.city();
    t.model.state();
    t.model.country();
    t.model.postalcode();
    t.model.prefloc();
    t.model.email();
    t.model.pass();
    t.model.oauth_provider();
    t.model.oauth_id();
    t.model.timestamp();
    t.model.enc_key();
    t.model.pic();
    t.model.contact_id();
    t.model.mobile();
    t.model.last_login();
    t.model.is_suspended();
    t.model.session_hash();
  },
});

export const user_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user_master();
    t.crud.user_masters({ filtering: true, ordering: true });
  },
});

export const user_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneuser_master();
    t.crud.updateOneuser_master();
    t.crud.upsertOneuser_master();
    t.crud.deleteOneuser_master();

    t.crud.updateManyuser_master();
    t.crud.deleteManyuser_master();
  },
});
