import { objectType, extendType } from 'nexus';

export const company_services_medical_forms = objectType({
  name: 'company_services_medical_forms',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.service_id();
    t.model.form_id();
  },
});

export const company_services_medical_formsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_services_medical_forms();
    t.crud.company_services_medical_forms({ filtering: true, ordering: true });
  },
});

export const company_services_medical_formsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_services_medical_forms();
    t.crud.updateOnecompany_services_medical_forms();
    t.crud.upsertOnecompany_services_medical_forms();
    t.crud.deleteOnecompany_services_medical_forms();

    t.crud.updateManycompany_services_medical_forms();
    t.crud.deleteManycompany_services_medical_forms();
  },
});
