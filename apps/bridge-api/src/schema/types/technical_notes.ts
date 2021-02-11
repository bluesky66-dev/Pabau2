import { objectType, extendType } from 'nexus';

export const technical_notes = objectType({
  name: 'technical_notes',
  definition(t) {
    t.model.id();
    t.model.created();
    t.model.last_edit();
    t.model.notes();
    t.model.uid();
    t.model.contact_id();
    t.model.company_id();
  },
});

export const technical_notesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.technical_notes();
    t.crud.technical_notes({ filtering: true, ordering: true });
  },
});

export const technical_notesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetechnical_notes();
    t.crud.updateOnetechnical_notes();
    t.crud.upsertOnetechnical_notes();
    t.crud.deleteOnetechnical_notes();

    t.crud.updateManytechnical_notes();
    t.crud.deleteManytechnical_notes();
  },
});
