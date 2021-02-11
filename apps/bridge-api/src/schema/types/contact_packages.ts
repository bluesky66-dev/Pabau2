import { objectType, extendType } from 'nexus';

export const contact_packages = objectType({
  name: 'contact_packages',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.package_id();
    t.model.invoice_id();
    t.model.activation_date();
    t.model.expiration_date();
    t.model.occupier();
    t.model.CreatedDate();
    t.model.sold_by();
    t.model.code();
    t.model.voided();
    t.model.voided_by();
    t.model.custom_status();
    t.model.imported();
    t.model.package_code();
    t.model.old_invoice_id();
    t.model.custom_id();
  },
});

export const contact_packagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_packages();
    t.crud.contact_packages({ filtering: true, ordering: true });
  },
});

export const contact_packagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_packages();
    t.crud.updateOnecontact_packages();
    t.crud.upsertOnecontact_packages();
    t.crud.deleteOnecontact_packages();

    t.crud.updateManycontact_packages();
    t.crud.deleteManycontact_packages();
  },
});
