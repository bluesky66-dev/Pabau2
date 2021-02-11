import { objectType, extendType } from 'nexus';

export const cm_staff_wages = objectType({
  name: 'cm_staff_wages',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Date();
    t.model.Position();
    t.model.Rate();
    t.model.Type();
    t.model.Note();
  },
});

export const cm_staff_wagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_wages();
    t.crud.cm_staff_wages({ filtering: true, ordering: true });
  },
});

export const cm_staff_wagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_wages();
    t.crud.updateOnecm_staff_wages();
    t.crud.upsertOnecm_staff_wages();
    t.crud.deleteOnecm_staff_wages();

    t.crud.updateManycm_staff_wages();
    t.crud.deleteManycm_staff_wages();
  },
});
