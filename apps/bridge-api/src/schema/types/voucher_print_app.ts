import { objectType, extendType } from 'nexus';

export const voucher_print_app = objectType({
  name: 'voucher_print_app',
  definition(t) {
    t.model.id();
    t.model.content();
    t.model.company_id();
    t.model.subject();
  },
});

export const voucher_print_appQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.voucher_print_app();
    t.crud.voucher_print_apps({ filtering: true, ordering: true });
  },
});

export const voucher_print_appMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevoucher_print_app();
    t.crud.updateOnevoucher_print_app();
    t.crud.upsertOnevoucher_print_app();
    t.crud.deleteOnevoucher_print_app();

    t.crud.updateManyvoucher_print_app();
    t.crud.deleteManyvoucher_print_app();
  },
});
