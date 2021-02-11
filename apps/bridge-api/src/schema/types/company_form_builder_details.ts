import { objectType, extendType } from 'nexus';

export const company_form_builder_details = objectType({
  name: 'company_form_builder_details',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.form_name();
    t.model.form_dir_name();
    t.model.created_by();
    t.model.created_date();
  },
});

export const company_form_builder_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_form_builder_details();
    t.crud.company_form_builder_details({ filtering: true, ordering: true });
  },
});

export const company_form_builder_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_form_builder_details();
    t.crud.updateOnecompany_form_builder_details();
    t.crud.upsertOnecompany_form_builder_details();
    t.crud.deleteOnecompany_form_builder_details();

    t.crud.updateManycompany_form_builder_details();
    t.crud.deleteManycompany_form_builder_details();
  },
});
