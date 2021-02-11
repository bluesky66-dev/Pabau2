import { objectType, extendType } from 'nexus';

export const contact_insurance = objectType({
  name: 'contact_insurance',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.provider_number();
    t.model.auth_code();
    t.model.membership_number();
    t.model.charge_type();
    t.model.company_id();
    t.model.imported();
  },
});

export const contact_insuranceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_insurance();
    t.crud.contact_insurances({ filtering: true, ordering: true });
  },
});

export const contact_insuranceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_insurance();
    t.crud.updateOnecontact_insurance();
    t.crud.upsertOnecontact_insurance();
    t.crud.deleteOnecontact_insurance();

    t.crud.updateManycontact_insurance();
    t.crud.deleteManycontact_insurance();
  },
});
