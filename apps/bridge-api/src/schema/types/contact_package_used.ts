import { objectType, extendType } from 'nexus';

export const contact_package_used = objectType({
  name: 'contact_package_used',
  definition(t) {
    t.model.id();
    t.model.contact_package_id();
    t.model.date_created();
    t.model.booking_id();
    t.model.status();
    t.model.book_take();
    t.model.cancel_take();
    t.model.occupier();
    t.model.booking_master_id();
    t.model.old_booking_id();
  },
});

export const contact_package_usedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.contact_package_used();
    t.crud.contact_package_useds({ filtering: true, ordering: true });
  },
});

export const contact_package_usedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecontact_package_used();
    t.crud.updateOnecontact_package_used();
    t.crud.upsertOnecontact_package_used();
    t.crud.deleteOnecontact_package_used();

    t.crud.updateManycontact_package_used();
    t.crud.deleteManycontact_package_used();
  },
});
