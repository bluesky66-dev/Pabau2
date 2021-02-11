import { objectType, extendType } from 'nexus';

export const loyalty_backend = objectType({
  name: 'loyalty_backend',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.logo_image();
    t.model.page_title();
    t.model.tab1_title();
    t.model.tab2_title();
    t.model.tab3_title();
    t.model.tab4_title();
    t.model.tab5_title();
    t.model.tab1_content();
    t.model.tab2_content();
    t.model.tab3_content();
    t.model.tab4_content();
    t.model.tab5_content();
    t.model.privacy_policy();
    t.model.terms_and_conditions();
    t.model.faq();
    t.model.cookies();
    t.model.bg_color();
    t.model.bt_bg_color();
    t.model.foot_bg_color();
    t.model.main_bg_color();
  },
});

export const loyalty_backendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_backend();
    t.crud.loyalty_backends({ filtering: true, ordering: true });
  },
});

export const loyalty_backendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_backend();
    t.crud.updateOneloyalty_backend();
    t.crud.upsertOneloyalty_backend();
    t.crud.deleteOneloyalty_backend();

    t.crud.updateManyloyalty_backend();
    t.crud.deleteManyloyalty_backend();
  },
});
