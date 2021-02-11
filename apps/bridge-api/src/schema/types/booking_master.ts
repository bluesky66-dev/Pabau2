import { objectType, extendType } from 'nexus';

export const booking_master = objectType({
  name: 'booking_master',
  definition(t) {
    t.model.id();
    t.model.class_id();
    t.model.user_id();
    t.model.booking_date();
    t.model.payment_status();
    t.model.cancel_status();
    t.model.cancel_date();
    t.model.company_id();
    t.model.class_currency();
    t.model.class_price();
    t.model.checked_in();
    t.model.payed_by();
    t.model.waiting();
  },
});

export const booking_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.booking_master();
    t.crud.booking_masters({ filtering: true, ordering: true });
  },
});

export const booking_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebooking_master();
    t.crud.updateOnebooking_master();
    t.crud.upsertOnebooking_master();
    t.crud.deleteOnebooking_master();

    t.crud.updateManybooking_master();
    t.crud.deleteManybooking_master();
  },
});
