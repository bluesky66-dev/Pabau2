import { objectType, extendType } from 'nexus';

export const communications_content = objectType({
  name: 'communications_content',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.hash();
    t.model.subject();
    t.model.body();
    t.model.communications();
  },
});

export const communications_contentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.communications_content();
    t.crud.communications_contents({ filtering: true, ordering: true });
  },
});

export const communications_contentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecommunications_content();
    t.crud.updateOnecommunications_content();
    t.crud.upsertOnecommunications_content();
    t.crud.deleteOnecommunications_content();

    t.crud.updateManycommunications_content();
    t.crud.deleteManycommunications_content();
  },
});
