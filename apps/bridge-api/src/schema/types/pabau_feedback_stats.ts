import { objectType, extendType } from 'nexus';

export const pabau_feedback_stats = objectType({
  name: 'pabau_feedback_stats',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.sent_to_email_sms();
    t.model.sent_date();
    t.model.related_id();
    t.model.converted();
  },
});

export const pabau_feedback_statsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_feedback_stats();
    t.crud.pabau_feedback_stats({ filtering: true, ordering: true });
  },
});

export const pabau_feedback_statsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_feedback_stats();
    t.crud.updateOnepabau_feedback_stats();
    t.crud.upsertOnepabau_feedback_stats();
    t.crud.deleteOnepabau_feedback_stats();

    t.crud.updateManypabau_feedback_stats();
    t.crud.deleteManypabau_feedback_stats();
  },
});
