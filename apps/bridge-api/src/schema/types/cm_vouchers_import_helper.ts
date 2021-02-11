import { objectType, extendType } from 'nexus';

export const cm_vouchers_import_helper = objectType({
  name: 'cm_vouchers_import_helper',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.imported();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.custom_id();
    t.model.date_from();
    t.model.date_to();
    t.model.custom_user_name();
    t.model.amount();
    t.model.remaining();
    t.model.contact_id();
    t.model.date_sold();
    t.model.code();
  },
});

export const cm_vouchers_import_helperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_vouchers_import_helper();
    t.crud.cm_vouchers_import_helpers({ filtering: true, ordering: true });
  },
});

export const cm_vouchers_import_helperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_vouchers_import_helper();
    t.crud.updateOnecm_vouchers_import_helper();
    t.crud.upsertOnecm_vouchers_import_helper();
    t.crud.deleteOnecm_vouchers_import_helper();

    t.crud.updateManycm_vouchers_import_helper();
    t.crud.deleteManycm_vouchers_import_helper();
  },
});
