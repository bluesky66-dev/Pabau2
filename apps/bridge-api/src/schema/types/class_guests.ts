import { objectType, extendType } from 'nexus';

export const class_guests = objectType({
  name: 'class_guests',
  definition(t) {
    t.model.id();
    t.model.guest_name();
    t.model.signing_date();
    t.model.class_id();
    t.model.company_id();
    t.model.cancel_status();
    t.model.mobile();
  },
});

export const class_guestsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_guests();
    t.crud.class_guests({ filtering: true, ordering: true });
  },
});

export const class_guestsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_guests();
    t.crud.updateOneclass_guests();
    t.crud.upsertOneclass_guests();
    t.crud.deleteOneclass_guests();

    t.crud.updateManyclass_guests();
    t.crud.deleteManyclass_guests();
  },
});
