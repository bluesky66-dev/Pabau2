import { objectType, extendType } from 'nexus';

export const zproducts_barcode = objectType({
  name: 'zproducts_barcode',
  definition(t) {
    t.model.id();
    t.model.product_name();
    t.model.barcode();
    t.model.occupier();
  },
});

export const zproducts_barcodeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zproducts_barcode();
    t.crud.zproducts_barcodes({ filtering: true, ordering: true });
  },
});

export const zproducts_barcodeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezproducts_barcode();
    t.crud.updateOnezproducts_barcode();
    t.crud.upsertOnezproducts_barcode();
    t.crud.deleteOnezproducts_barcode();

    t.crud.updateManyzproducts_barcode();
    t.crud.deleteManyzproducts_barcode();
  },
});
