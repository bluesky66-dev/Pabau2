import { objectType, extendType } from 'nexus';

export const at_question_relations = objectType({
  name: 'at_question_relations',
  definition(t) {
    t.model.company_id();
    t.model.answer_id();
    t.model.product_id();
  },
});

export const at_question_relationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.at_question_relations();
    t.crud.at_question_relations({ filtering: true, ordering: true });
  },
});

export const at_question_relationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneat_question_relations();
    t.crud.updateOneat_question_relations();
    t.crud.upsertOneat_question_relations();
    t.crud.deleteOneat_question_relations();

    t.crud.updateManyat_question_relations();
    t.crud.deleteManyat_question_relations();
  },
});
