import { objectType, extendType } from 'nexus';

export const checkin_queue = objectType({
  name: 'checkin_queue',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.been_before();
    t.model.date_start();
    t.model.accepted();
    t.model.is_lunch();
    t.model.name();
    t.model.date_accepted();
    t.model.date_end();
    t.model.was_anyone();
    t.model.finalise();
    t.model.sms_number();
    t.model.sms_sent();
    t.model.sms_wanted();
    t.model.skips();
    t.model.connect_id();
    t.model.order();
    t.model.spotify_uri();
    t.model.date_binned();
  },
});

export const checkin_queueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.checkin_queue();
    t.crud.checkin_queues({ filtering: true, ordering: true });
  },
});

export const checkin_queueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecheckin_queue();
    t.crud.updateOnecheckin_queue();
    t.crud.upsertOnecheckin_queue();
    t.crud.deleteOnecheckin_queue();

    t.crud.updateManycheckin_queue();
    t.crud.deleteManycheckin_queue();
  },
});
