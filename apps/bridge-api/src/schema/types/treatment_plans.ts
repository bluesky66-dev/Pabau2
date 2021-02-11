import { objectType, extendType } from 'nexus';

export const treatment_plans = objectType({
  name: 'treatment_plans',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.form_id();
    t.model.form_contact_id();
    t.model.company_id();
    t.model.plan_data();
    t.model.created_on();
    t.model.created_by();
    t.model.status();
  },
});

export const treatment_plansQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.treatment_plans();
    t.crud.treatment_plans({ filtering: true, ordering: true });
  },
});

export const treatment_plansMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetreatment_plans();
    t.crud.updateOnetreatment_plans();
    t.crud.upsertOnetreatment_plans();
    t.crud.deleteOnetreatment_plans();

    t.crud.updateManytreatment_plans();
    t.crud.deleteManytreatment_plans();
  },
});
