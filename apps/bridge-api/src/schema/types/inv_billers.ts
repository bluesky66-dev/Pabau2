import { objectType, extendType } from 'nexus';

export const inv_billers = objectType({
  name: 'inv_billers',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.company();
    t.model.cui();
    t.model.reg();
    t.model.cnp();
    t.model.serie();
    t.model.account_no();
    t.model.bank();
    t.model.address();
    t.model.city();
    t.model.state();
    t.model.postal_code();
    t.model.country();
    t.model.phone();
    t.model.email();
    t.model.logo();
    t.model.invoice_footer();
    t.model.occupier();
    t.model.uid();
    t.model.created_date();
    t.model.modified_date();
    t.model.custom_id();
    t.model.imported();
    t.model.qualification();
    t.model.is_disabled();
  },
});

export const inv_billersQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_billers();
    t.crud.inv_billers({ filtering: true, ordering: true });
  },
});

export const inv_billersMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_billers();
    t.crud.updateOneinv_billers();
    t.crud.upsertOneinv_billers();
    t.crud.deleteOneinv_billers();

    t.crud.updateManyinv_billers();
    t.crud.deleteManyinv_billers();
  },
});
