import { objectType, extendType } from 'nexus';

export const inv_quote_preview = objectType({
  name: 'inv_quote_preview',
  definition(t) {
    t.model.id();
    t.model.quote_id();
    t.model.template_id();
    t.model.distribution_id();
    t.model.date();
    t.model.url();
    t.model.form_data();
    t.model.comments();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const inv_quote_previewQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.inv_quote_preview();
    t.crud.inv_quote_previews({ filtering: true, ordering: true });
  },
});

export const inv_quote_previewMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinv_quote_preview();
    t.crud.updateOneinv_quote_preview();
    t.crud.upsertOneinv_quote_preview();
    t.crud.deleteOneinv_quote_preview();

    t.crud.updateManyinv_quote_preview();
    t.crud.deleteManyinv_quote_preview();
  },
});
