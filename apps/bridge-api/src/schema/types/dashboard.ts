import { objectType, extendType } from 'nexus';

export const dashboard = objectType({
  name: 'dashboard',
  definition(t) {
    t.model.userID();
    t.model.jdashStorage();
    t.model.page();
    t.model.id();
  },
});

export const dashboardQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.dashboard();
    t.crud.dashboards({ filtering: true, ordering: true });
  },
});

export const dashboardMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedashboard();
    t.crud.updateOnedashboard();
    t.crud.upsertOnedashboard();
    t.crud.deleteOnedashboard();

    t.crud.updateManydashboard();
    t.crud.deleteManydashboard();
  },
});
