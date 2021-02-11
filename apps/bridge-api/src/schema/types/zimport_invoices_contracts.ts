import { objectType, extendType } from 'nexus';

export const zimport_invoices_contracts = objectType({
  name: 'zimport_invoices_contracts',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_id();
    t.model.custom_id2();
    t.model.custom_contract_id();
    t.model.custom_contract_name();
    t.model.added();
  },
});

export const zimport_invoices_contractsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_invoices_contracts();
    t.crud.zimport_invoices_contracts({ filtering: true, ordering: true });
  },
});

export const zimport_invoices_contractsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_invoices_contracts();
    t.crud.updateOnezimport_invoices_contracts();
    t.crud.upsertOnezimport_invoices_contracts();
    t.crud.deleteOnezimport_invoices_contracts();

    t.crud.updateManyzimport_invoices_contracts();
    t.crud.deleteManyzimport_invoices_contracts();
  },
});
