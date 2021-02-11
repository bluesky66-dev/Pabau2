import { objectType, extendType } from 'nexus';

export const lab_product_template = objectType({
  name: 'lab_product_template',
  definition(t) {
    t.model.id();
    t.model.test_name();
    t.model.code();
    t.model.sample_reqs();
    t.model.tat();
  },
});

export const lab_product_templateQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.lab_product_template();
    t.crud.lab_product_templates({ filtering: true, ordering: true });
  },
});

export const lab_product_templateMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnelab_product_template();
    t.crud.updateOnelab_product_template();
    t.crud.upsertOnelab_product_template();
    t.crud.deleteOnelab_product_template();

    t.crud.updateManylab_product_template();
    t.crud.deleteManylab_product_template();
  },
});
