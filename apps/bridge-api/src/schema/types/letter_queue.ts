import { objectType, extendType } from 'nexus';

export const letter_queue = objectType({
  name: 'letter_queue',
  definition(t) {
    t.model.id();
    t.model.letter_id();
    t.model.company_id();
    t.model.appointment_id();
    t.model.contact_id();
    t.model.letter_to_id();
    t.model.communication_id();
    t.model.status();
    t.model.queued_by_id();
    t.model.printed_by_id();
    t.model.created_date();
    t.model.printed_date();
  },
});

export const letter_queueQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.letter_queue();
    t.crud.letter_queues({ filtering: true, ordering: true });
  },
});

export const letter_queueMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneletter_queue();
    t.crud.updateOneletter_queue();
    t.crud.upsertOneletter_queue();
    t.crud.deleteOneletter_queue();

    t.crud.updateManyletter_queue();
    t.crud.deleteManyletter_queue();
  },
});
