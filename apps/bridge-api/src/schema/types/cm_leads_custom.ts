import { objectType, extendType } from 'nexus';

export const cm_leads_custom = objectType({
  name: 'cm_leads_custom',
  definition(t) {
    t.model.id();
    t.model.lead_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_label();
    t.model.custom_field_value();
    t.model.imported();
    t.model.old_value();
  },
});

export const cm_leads_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_leads_custom();
    t.crud.cm_leads_customs({ filtering: true, ordering: true });
  },
});

export const cm_leads_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_leads_custom();
    t.crud.updateOnecm_leads_custom();
    t.crud.upsertOnecm_leads_custom();
    t.crud.deleteOnecm_leads_custom();

    t.crud.updateManycm_leads_custom();
    t.crud.deleteManycm_leads_custom();
  },
});
