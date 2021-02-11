import { objectType, extendType } from 'nexus';

export const teacher_master = objectType({
  name: 'teacher_master',
  definition(t) {
    t.model.teach_id();
    t.model.teach_name();
    t.model.company_id();
    t.model.user_id();
  },
});

export const teacher_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.teacher_master();
    t.crud.teacher_masters({ filtering: true, ordering: true });
  },
});

export const teacher_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneteacher_master();
    t.crud.updateOneteacher_master();
    t.crud.upsertOneteacher_master();
    t.crud.deleteOneteacher_master();

    t.crud.updateManyteacher_master();
    t.crud.deleteManyteacher_master();
  },
});
