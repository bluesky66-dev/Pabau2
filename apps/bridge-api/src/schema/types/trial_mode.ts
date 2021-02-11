import { objectType, extendType } from 'nexus';

export const trial_mode = objectType({
  name: 'trial_mode',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.email();
    t.model.status();
    t.model.date_tracked();
    t.model.trial_tracked();
  },
});

export const trial_modeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.trial_mode();
    t.crud.trial_modes({ filtering: true, ordering: true });
  },
});

export const trial_modeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetrial_mode();
    t.crud.updateOnetrial_mode();
    t.crud.upsertOnetrial_mode();
    t.crud.deleteOnetrial_mode();

    t.crud.updateManytrial_mode();
    t.crud.deleteManytrial_mode();
  },
});
