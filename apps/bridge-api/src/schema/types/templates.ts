import { objectType, extendType } from 'nexus';

export const templates = objectType({
  name: 'templates',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.content();
    t.model.preview();
    t.model.fields();
    t.model.parse_css();
    t.model.fields_array();
    t.model.comment_array();
  },
});

export const templatesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.templates();
    t.crud.templates({ filtering: true, ordering: true });
  },
});

export const templatesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetemplates();
    t.crud.updateOnetemplates();
    t.crud.upsertOnetemplates();
    t.crud.deleteOnetemplates();

    t.crud.updateManytemplates();
    t.crud.deleteManytemplates();
  },
});
