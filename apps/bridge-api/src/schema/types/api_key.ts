import { objectType, extendType } from 'nexus';

export const api_key = objectType({
  name: 'api_key',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.api_key();
    t.model.app_type();
    t.model.created_date();
    t.model.contacts();
    t.model.bookings();
    t.model.invoices();
    t.model.locations();
    t.model.services();
    t.model.staff();
    t.model.financials();
    t.model.leads();
    t.model.medical_forms();
    t.model.reports();
  },
});

export const api_keyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.api_key();
    t.crud.api_keys({ filtering: true, ordering: true });
  },
});

export const api_keyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneapi_key();
    t.crud.updateOneapi_key();
    t.crud.upsertOneapi_key();
    t.crud.deleteOneapi_key();

    t.crud.updateManyapi_key();
    t.crud.deleteManyapi_key();
  },
});
