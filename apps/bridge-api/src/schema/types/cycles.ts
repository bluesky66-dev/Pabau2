import { objectType, extendType } from 'nexus';

export const cycles = objectType({
  name: 'cycles',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.user_id();
    t.model.contact_id();
    t.model.cycle_name();
    t.model.type();
    t.model.diagnosis_code_id();
    t.model.medical_form_contact_id();
    t.model.status();
    t.model.quantity();
    t.model.auth_code();
    t.model.start_date();
    t.model.end_date();
    t.model.date_created();
  },
});

export const cyclesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cycles();
    t.crud.cycles({ filtering: true, ordering: true });
  },
});

export const cyclesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecycles();
    t.crud.updateOnecycles();
    t.crud.upsertOnecycles();
    t.crud.deleteOnecycles();

    t.crud.updateManycycles();
    t.crud.deleteManycycles();
  },
});
