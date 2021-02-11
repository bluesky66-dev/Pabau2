import { objectType, extendType } from 'nexus';

export const guestlist = objectType({
  name: 'guestlist',
  definition(t) {
    t.model.guestlistid();
    t.model.name();
    t.model.nop();
    t.model.date();
    t.model.ip();
    t.model.occupier();
    t.model.mobile();
    t.model.email();
    t.model.location();
    t.model.submission_date();
  },
});

export const guestlistQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.guestlist();
    t.crud.guestlists({ filtering: true, ordering: true });
  },
});

export const guestlistMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneguestlist();
    t.crud.updateOneguestlist();
    t.crud.upsertOneguestlist();
    t.crud.deleteOneguestlist();

    t.crud.updateManyguestlist();
    t.crud.deleteManyguestlist();
  },
});
