import { objectType, extendType } from 'nexus';

export const medical_form_pinned = objectType({
  name: 'medical_form_pinned',
  definition(t) {
    t.model.id();
    t.model.form_id();
    t.model.occupier();
    t.model.user_id();
    t.model.pinned();
  },
});

export const medical_form_pinnedQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_pinned();
    t.crud.medical_form_pinneds({ filtering: true, ordering: true });
  },
});

export const medical_form_pinnedMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_pinned();
    t.crud.updateOnemedical_form_pinned();
    t.crud.upsertOnemedical_form_pinned();
    t.crud.deleteOnemedical_form_pinned();

    t.crud.updateManymedical_form_pinned();
    t.crud.deleteManymedical_form_pinned();
  },
});
