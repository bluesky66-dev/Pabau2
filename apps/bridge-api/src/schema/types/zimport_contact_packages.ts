import { objectType, extendType } from 'nexus';

export const zimport_contact_packages = objectType({
  name: 'zimport_contact_packages',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.imported();
    t.model.custom_user_name();
    t.model.custom_contact_id();
    t.model.custom_contact_name();
    t.model.contact_id();
    t.model.package_name();
    t.model.package_code();
    t.model.date_created();
    t.model.payment_method();
    t.model.amount();
    t.model.activation_date();
    t.model.expiration_date();
    t.model.invoice_id();
    t.model.remaining();
    t.model.total();
    t.model.added();
    t.model.contact_package_id();
    t.model.service_name();
    t.model.price_item();
    t.model.custom_id();
    t.model.custom_status();
  },
});

export const zimport_contact_packagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_contact_packages();
    t.crud.zimport_contact_packages({ filtering: true, ordering: true });
  },
});

export const zimport_contact_packagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_contact_packages();
    t.crud.updateOnezimport_contact_packages();
    t.crud.upsertOnezimport_contact_packages();
    t.crud.deleteOnezimport_contact_packages();

    t.crud.updateManyzimport_contact_packages();
    t.crud.deleteManyzimport_contact_packages();
  },
});
