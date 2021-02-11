import { objectType, extendType } from 'nexus';

export const recall_types = objectType({
  name: 'recall_types',
  definition(t) {
    t.model.id();
    t.model.recall_name();
    t.model.recall_mode();
    t.model.recall_period();
    t.model.company_id();
    t.model.send_sms();
    t.model.recall_category_id();
    t.model.send_email();
    t.model.auto_recall();
    t.model.auto_recall_products_ids();
    t.model.auto_recall_trigger();
    t.model.auto_recall_services_ids();
    t.model.email_from();
    t.model.sms_from();
  },
});

export const recall_typesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.recall_types();
    t.crud.recall_types({ filtering: true, ordering: true });
  },
});

export const recall_typesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerecall_types();
    t.crud.updateOnerecall_types();
    t.crud.upsertOnerecall_types();
    t.crud.deleteOnerecall_types();

    t.crud.updateManyrecall_types();
    t.crud.deleteManyrecall_types();
  },
});
