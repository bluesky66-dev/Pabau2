import { objectType, extendType } from 'nexus';

export const tbl_signed_contracts = objectType({
  name: 'tbl_signed_contracts',
  definition(t) {
    t.model.id();
    t.model.contract_id();
    t.model.contract_signature();
    t.model.contract_status();
    t.model.update_date_time();
    t.model.create_date_time();
    t.model.contact_id();
    t.model.contract_signature2();
    t.model.booking_id();
  },
});

export const tbl_signed_contractsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tbl_signed_contracts();
    t.crud.tbl_signed_contracts({ filtering: true, ordering: true });
  },
});

export const tbl_signed_contractsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetbl_signed_contracts();
    t.crud.updateOnetbl_signed_contracts();
    t.crud.upsertOnetbl_signed_contracts();
    t.crud.deleteOnetbl_signed_contracts();

    t.crud.updateManytbl_signed_contracts();
    t.crud.deleteManytbl_signed_contracts();
  },
});
