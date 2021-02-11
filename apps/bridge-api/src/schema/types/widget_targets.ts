import { objectType, extendType } from 'nexus';

export const widget_targets = objectType({
  name: 'widget_targets',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.appointment_target_day();
    t.model.appointment_target_week();
    t.model.appointment_target_month();
    t.model.appointment_target_year();
    t.model.client_target_day();
    t.model.client_target_week();
    t.model.client_target_month();
    t.model.client_target_year();
  },
});

export const widget_targetsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.widget_targets();
    t.crud.widget_targets({ filtering: true, ordering: true });
  },
});

export const widget_targetsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewidget_targets();
    t.crud.updateOnewidget_targets();
    t.crud.upsertOnewidget_targets();
    t.crud.deleteOnewidget_targets();

    t.crud.updateManywidget_targets();
    t.crud.deleteManywidget_targets();
  },
});
