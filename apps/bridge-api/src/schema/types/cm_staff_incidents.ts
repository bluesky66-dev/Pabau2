import { objectType, extendType } from 'nexus';

export const cm_staff_incidents = objectType({
  name: 'cm_staff_incidents',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Date();
    t.model.Type();
    t.model.Title();
    t.model.late_by();
    t.model.Notes();
  },
});

export const cm_staff_incidentsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_incidents();
    t.crud.cm_staff_incidents({ filtering: true, ordering: true });
  },
});

export const cm_staff_incidentsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_incidents();
    t.crud.updateOnecm_staff_incidents();
    t.crud.upsertOnecm_staff_incidents();
    t.crud.deleteOnecm_staff_incidents();

    t.crud.updateManycm_staff_incidents();
    t.crud.deleteManycm_staff_incidents();
  },
});
