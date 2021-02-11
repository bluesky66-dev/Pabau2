import { objectType, extendType } from 'nexus';

export const inv_sales_audit = objectType({
  name: 'inv_sales_audit',
  definition(t) {
    t.model.id();
    t.model.mode();
    t.model.guid();
    t.model.sale_id();
    t.model.customer_id();
    t.model.date();
    t.model.date_deleted();
  },
});

export const inv_sales_auditQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_sales_audit();
    t.crud.inv_sales_audits({ filtering: true, ordering: true });
  },
});

export const inv_sales_auditMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_sales_audit();
    t.crud.updateOneinv_sales_audit();
    t.crud.upsertOneinv_sales_audit();
    t.crud.deleteOneinv_sales_audit();

    t.crud.updateManyinv_sales_audit();
    t.crud.deleteManyinv_sales_audit();
  },
});
