import { objectType, extendType } from 'nexus';

export const tbl_contract_images = objectType({
  name: 'tbl_contract_images',
  definition(t) {
    t.model.id();
    t.model.contract_id();
    t.model.image();
    t.model.signed_contract_id();
    t.model.title();
  },
});

export const tbl_contract_imagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tbl_contract_images();
    t.crud.tbl_contract_images({ filtering: true, ordering: true });
  },
});

export const tbl_contract_imagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetbl_contract_images();
    t.crud.updateOnetbl_contract_images();
    t.crud.upsertOnetbl_contract_images();
    t.crud.deleteOnetbl_contract_images();

    t.crud.updateManytbl_contract_images();
    t.crud.deleteManytbl_contract_images();
  },
});
