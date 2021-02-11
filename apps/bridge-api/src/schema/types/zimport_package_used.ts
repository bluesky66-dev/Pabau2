import { objectType, extendType } from 'nexus';

export const zimport_package_used = objectType({
  name: 'zimport_package_used',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_contact_id();
    t.model.custom_contact_package_id();
    t.model.custom_booking_id();
    t.model.imported();
    t.model.added();
    t.model.created_date();
  },
});

export const zimport_package_usedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.zimport_package_used();
    t.crud.zimport_package_useds({ filtering: true, ordering: true });
  },
});

export const zimport_package_usedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnezimport_package_used();
    t.crud.updateOnezimport_package_used();
    t.crud.upsertOnezimport_package_used();
    t.crud.deleteOnezimport_package_used();

    t.crud.updateManyzimport_package_used();
    t.crud.deleteManyzimport_package_used();
  },
});
