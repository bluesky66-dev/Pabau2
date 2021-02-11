import { objectType, extendType } from 'nexus';

export const events = objectType({
  name: 'events',
  definition(t) {
    t.model.eventid();
    t.model.brand();
    t.model.date();
    t.model.title();
    t.model.imgid();
    t.model.featured();
    t.model.venue();
    t.model.company();
    t.model.address();
    t.model.start();
    t.model.end();
    t.model.price();
    t.model.postcode();
    t.model.city();
    t.model.cover_photo();
    t.model.deleted();
  },
});

export const eventsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.events();
    t.crud.events({ filtering: true, ordering: true });
  },
});

export const eventsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneevents();
    t.crud.updateOneevents();
    t.crud.upsertOneevents();
    t.crud.deleteOneevents();

    t.crud.updateManyevents();
    t.crud.deleteManyevents();
  },
});
