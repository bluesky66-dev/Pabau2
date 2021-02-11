import { objectType, extendType } from 'nexus';

export const zimport_sales_clinico = objectType({
  name: 'zimport_sales_clinico',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.status_name();
    t.model.outstanding_amount();
    t.model.issue_date();
    t.model.date_closed();
    t.model.deleted();
    t.model.description();
  },
});

export const zimport_sales_clinicoQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_sales_clinico();
    t.crud.zimport_sales_clinicos({ filtering: true, ordering: true });
  },
});

export const zimport_sales_clinicoMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_sales_clinico();
    t.crud.updateOnezimport_sales_clinico();
    t.crud.upsertOnezimport_sales_clinico();
    t.crud.deleteOnezimport_sales_clinico();

    t.crud.updateManyzimport_sales_clinico();
    t.crud.deleteManyzimport_sales_clinico();
  },
});
