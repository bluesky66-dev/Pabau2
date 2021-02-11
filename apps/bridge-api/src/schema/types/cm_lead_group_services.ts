import { objectType, extendType } from 'nexus';

export const cm_lead_group_services = objectType({
  name: 'cm_lead_group_services',
  definition(t) {
    t.model.id();
    t.model.group_id();
    t.model.service_name();
    t.model.company_id();
  },
});

export const cm_lead_group_servicesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_lead_group_services();
    t.crud.cm_lead_group_services({ filtering: true, ordering: true });
  },
});

export const cm_lead_group_servicesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_lead_group_services();
    t.crud.updateOnecm_lead_group_services();
    t.crud.upsertOnecm_lead_group_services();
    t.crud.deleteOnecm_lead_group_services();

    t.crud.updateManycm_lead_group_services();
    t.crud.deleteManycm_lead_group_services();
  },
});
