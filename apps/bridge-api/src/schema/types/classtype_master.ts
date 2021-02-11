import { objectType, extendType } from 'nexus';

export const classtype_master = objectType({
  name: 'classtype_master',
  definition(t) {
    t.model.ctype_id();
    t.model.ctype_name();
    t.model.ctype_compid();
    t.model.ctype_date();
    t.model.ctype_color();
    t.model.ctype_description();
    t.model.payment_option_disabled();
    t.model.credit_option_disabled();
  },
});

export const classtype_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classtype_master();
    t.crud.classtype_masters({ filtering: true, ordering: true });
  },
});

export const classtype_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclasstype_master();
    t.crud.updateOneclasstype_master();
    t.crud.upsertOneclasstype_master();
    t.crud.deleteOneclasstype_master();

    t.crud.updateManyclasstype_master();
    t.crud.deleteManyclasstype_master();
  },
});
