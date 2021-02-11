import { objectType, extendType } from 'nexus';

export const cm_staff_emergency = objectType({
  name: 'cm_staff_emergency',
  definition(t) {
    t.model.ID();
    t.model.StaffID();
    t.model.ContactName();
    t.model.Relationship();
    t.model.Address1();
    t.model.Address2();
    t.model.City();
    t.model.St();
    t.model.Zip();
    t.model.HomePhone();
    t.model.WorkPhone();
    t.model.CellPhone();
    t.model.ContactName2();
    t.model.Relationship2();
    t.model.Address12();
    t.model.Address22();
    t.model.City2();
    t.model.St2();
    t.model.Zip2();
    t.model.HomePhone2();
    t.model.WorkPhone2();
    t.model.CellPhone2();
    t.model.PhysicianName();
    t.model.Phone();
    t.model.SpecialNotes();
  },
});

export const cm_staff_emergencyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_emergency();
    t.crud.cm_staff_emergencies({ filtering: true, ordering: true });
  },
});

export const cm_staff_emergencyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_emergency();
    t.crud.updateOnecm_staff_emergency();
    t.crud.upsertOnecm_staff_emergency();
    t.crud.deleteOnecm_staff_emergency();

    t.crud.updateManycm_staff_emergency();
    t.crud.deleteManycm_staff_emergency();
  },
});
