import { objectType, extendType } from 'nexus';

export const checkin_appts = objectType({
  name: 'checkin_appts',
  definition(t) {
    t.model.id();
    t.model.appt_id();
    t.model.spotify_uri();
  },
});

export const checkin_apptsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkin_appts();
    t.crud.checkin_appts({ filtering: true, ordering: true });
  },
});

export const checkin_apptsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecheckin_appts();
    t.crud.updateOnecheckin_appts();
    t.crud.upsertOnecheckin_appts();
    t.crud.deleteOnecheckin_appts();

    t.crud.updateManycheckin_appts();
    t.crud.deleteManycheckin_appts();
  },
});
