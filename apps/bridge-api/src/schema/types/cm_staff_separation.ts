import { objectType, extendType } from 'nexus';

export const cm_staff_separation = objectType({
  name: 'cm_staff_separation',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.Date();
    t.model.Rehire();
    t.model.SeparationReason();
    t.model.Comments();
    t.model.EnrolDate();
    t.model.DeclinedDate();
    t.model.PaymentAmount();
    t.model.EndDate();
    t.model.Notes();
  },
});

export const cm_staff_separationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_separation();
    t.crud.cm_staff_separations({ filtering: true, ordering: true });
  },
});

export const cm_staff_separationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_separation();
    t.crud.updateOnecm_staff_separation();
    t.crud.upsertOnecm_staff_separation();
    t.crud.deleteOnecm_staff_separation();

    t.crud.updateManycm_staff_separation();
    t.crud.deleteManycm_staff_separation();
  },
});
