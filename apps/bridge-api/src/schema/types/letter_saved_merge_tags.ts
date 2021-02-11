import { objectType, extendType } from 'nexus';

export const letter_saved_merge_tags = objectType({
  name: 'letter_saved_merge_tags',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.communication_id();
    t.model.occupier();
    t.model.merge_tags();
    t.model.merge_tags_val();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const letter_saved_merge_tagsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.letter_saved_merge_tags();
    t.crud.letter_saved_merge_tags({ filtering: true, ordering: true });
  },
});

export const letter_saved_merge_tagsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneletter_saved_merge_tags();
    t.crud.updateOneletter_saved_merge_tags();
    t.crud.upsertOneletter_saved_merge_tags();
    t.crud.deleteOneletter_saved_merge_tags();

    t.crud.updateManyletter_saved_merge_tags();
    t.crud.deleteManyletter_saved_merge_tags();
  },
});
