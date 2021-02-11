import { objectType, extendType } from 'nexus';

export const inv_sale_notes = objectType({
  name: 'inv_sale_notes',
  definition(t) {
    t.model.inv_sale_id();
    t.model.note();
    t.model.created_by();
    t.model.created_date();
  },
});

export const inv_sale_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sale_notes();
    t.crud.inv_sale_notes({ filtering: true, ordering: true });
  },
});

export const inv_sale_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sale_notes();
    t.crud.updateOneinv_sale_notes();
    t.crud.upsertOneinv_sale_notes();
    t.crud.deleteOneinv_sale_notes();

    t.crud.updateManyinv_sale_notes();
    t.crud.deleteManyinv_sale_notes();
  },
});
