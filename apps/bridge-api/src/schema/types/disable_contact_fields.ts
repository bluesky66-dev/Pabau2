import { objectType, extendType } from 'nexus';

export const disable_contact_fields = objectType({
  name: 'disable_contact_fields',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.gender();
  },
});

export const disable_contact_fieldsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.disable_contact_fields();
    t.crud.disable_contact_fields({ filtering: true, ordering: true });
  },
});

export const disable_contact_fieldsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedisable_contact_fields();
    t.crud.updateOnedisable_contact_fields();
    t.crud.upsertOnedisable_contact_fields();
    t.crud.deleteOnedisable_contact_fields();

    t.crud.updateManydisable_contact_fields();
    t.crud.deleteManydisable_contact_fields();
  },
});
