import { objectType, extendType } from 'nexus';

export const cm_vaccines = objectType({
  name: 'cm_vaccines',
  definition(t) {
    t.model.id();
    t.model.cm_drugs_id();
    t.model.name();
    t.model.schedule_day();
    t.model.cover_months();
    t.model.recall_type_ids();
    t.model.administration_date();
    t.model.last_modified();
    t.model.modified_by();
    t.model.company_id();
    t.model.field_order();
    t.model.is_deleted();
  },
});

export const cm_vaccinesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_vaccines();
    t.crud.cm_vaccines({ filtering: true, ordering: true });
  },
});

export const cm_vaccinesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_vaccines();
    t.crud.updateOnecm_vaccines();
    t.crud.upsertOnecm_vaccines();
    t.crud.deleteOnecm_vaccines();

    t.crud.updateManycm_vaccines();
    t.crud.deleteManycm_vaccines();
  },
});
