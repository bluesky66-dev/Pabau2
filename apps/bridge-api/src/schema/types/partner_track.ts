import { objectType, extendType } from 'nexus';

export const partner_track = objectType({
  name: 'partner_track',
  definition(t) {
    t.model.id();
    t.model.partner_id();
    t.model.created_date();
    t.model.from_date();
    t.model.to_date();
  },
});

export const partner_trackQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.partner_track();
    t.crud.partner_tracks({ filtering: true, ordering: true });
  },
});

export const partner_trackMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepartner_track();
    t.crud.updateOnepartner_track();
    t.crud.upsertOnepartner_track();
    t.crud.deleteOnepartner_track();

    t.crud.updateManypartner_track();
    t.crud.deleteManypartner_track();
  },
});
