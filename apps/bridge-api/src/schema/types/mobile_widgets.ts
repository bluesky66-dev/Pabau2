import { objectType, extendType } from 'nexus';

export const mobile_widgets = objectType({
  name: 'mobile_widgets',
  definition(t) {
    t.model.id();
    t.model.user_id();
    t.model.company_id();
    t.model.widget_type();
    t.model.widget_order();
    t.model.widget_url();
  },
});

export const mobile_widgetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mobile_widgets();
    t.crud.mobile_widgets({ filtering: true, ordering: true });
  },
});

export const mobile_widgetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemobile_widgets();
    t.crud.updateOnemobile_widgets();
    t.crud.upsertOnemobile_widgets();
    t.crud.deleteOnemobile_widgets();

    t.crud.updateManymobile_widgets();
    t.crud.deleteManymobile_widgets();
  },
});
