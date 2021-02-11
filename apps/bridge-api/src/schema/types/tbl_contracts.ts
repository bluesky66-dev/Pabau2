import { objectType, extendType } from 'nexus';

export const tbl_contracts = objectType({
  name: 'tbl_contracts',
  definition(t) {
    t.model.id();
    t.model.OwnerID();
    t.model.contract_title();
    t.model.contract_description();
    t.model.contract_signature();
    t.model.create_date_time();
    t.model.occupier();
    t.model.number_signatures();
    t.model.show_logo();
    t.model.deleted();
    t.model.related_items();
    t.model.custom_id();
    t.model.imported();
  },
});

export const tbl_contractsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tbl_contracts();
    t.crud.tbl_contracts({ filtering: true, ordering: true });
  },
});

export const tbl_contractsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetbl_contracts();
    t.crud.updateOnetbl_contracts();
    t.crud.upsertOnetbl_contracts();
    t.crud.deleteOnetbl_contracts();

    t.crud.updateManytbl_contracts();
    t.crud.deleteManytbl_contracts();
  },
});
