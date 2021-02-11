import { objectType, extendType } from 'nexus';

export const gl_codes = objectType({
  name: 'gl_codes',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.code();
    t.model.description();
    t.model.related_to();
  },
});

export const gl_codesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.gl_codes();
    t.crud.gl_codes({ filtering: true, ordering: true });
  },
});

export const gl_codesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnegl_codes();
    t.crud.updateOnegl_codes();
    t.crud.upsertOnegl_codes();
    t.crud.deleteOnegl_codes();

    t.crud.updateManygl_codes();
    t.crud.deleteManygl_codes();
  },
});
