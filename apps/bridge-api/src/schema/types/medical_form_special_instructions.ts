import { objectType, extendType } from 'nexus';

export const medical_form_special_instructions = objectType({
  name: 'medical_form_special_instructions',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.instruction();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const medical_form_special_instructionsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.medical_form_special_instructions();
    t.crud.medical_form_special_instructions({ filtering: true, ordering: true });
  },
});

export const medical_form_special_instructionsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemedical_form_special_instructions();
    t.crud.updateOnemedical_form_special_instructions();
    t.crud.upsertOnemedical_form_special_instructions();
    t.crud.deleteOnemedical_form_special_instructions();

    t.crud.updateManymedical_form_special_instructions();
    t.crud.deleteManymedical_form_special_instructions();
  },
});
