import { objectType, extendType } from 'nexus';

export const tbl_contract_signatures = objectType({
  name: 'tbl_contract_signatures',
  definition(t) {
    t.model.id();
    t.model.contract_id();
    t.model.signature_title();
  },
});

export const tbl_contract_signaturesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tbl_contract_signatures();
    t.crud.tbl_contract_signatures({ filtering: true, ordering: true });
  },
});

export const tbl_contract_signaturesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetbl_contract_signatures();
    t.crud.updateOnetbl_contract_signatures();
    t.crud.upsertOnetbl_contract_signatures();
    t.crud.deleteOnetbl_contract_signatures();

    t.crud.updateManytbl_contract_signatures();
    t.crud.deleteManytbl_contract_signatures();
  },
});
