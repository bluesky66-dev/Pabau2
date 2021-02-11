import { objectType, extendType } from 'nexus';

export const cm_staff_general = objectType({
  name: 'cm_staff_general',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.Occupier();
    t.model.Avatar();
    t.model.Fname();
    t.model.Lname();
    t.model.MI();
    t.model.Birthdate();
    t.model.SSN();
    t.model.Address1();
    t.model.Address2();
    t.model.City();
    t.model.St();
    t.model.Zip();
    t.model.Country();
    t.model.HomePhone();
    t.model.WorkPhone();
    t.model.CellPhone();
    t.model.Fax();
    t.model.Email();
    t.model.Status();
    t.model.EmployeeNumber();
    t.model.HireDate();
    t.model.RenewalDate();
    t.model.max_vacation_days();
    t.model.Location();
    t.model.Position();
    t.model.Department();
    t.model.Manager();
    t.model.W4Status();
    t.model.Exemptions();
    t.model.Gender();
    t.model.EEOCode();
    t.model.EEOCategory();
    t.model.NextReview();
    t.model.EnumStatus();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.pabau_id();
    t.model.DefaultLocation();
    t.model.consultation_fee();
    t.model.deleted_on();
    t.model.secretary();
    t.model.secretary_enable();
    t.model.Salutation();
    t.model.commission_sheet_id();
  },
});

export const cm_staff_generalQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_staff_general();
    t.crud.cm_staff_generals({ filtering: true, ordering: true });
  },
});

export const cm_staff_generalMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_staff_general();
    t.crud.updateOnecm_staff_general();
    t.crud.upsertOnecm_staff_general();
    t.crud.deleteOnecm_staff_general();

    t.crud.updateManycm_staff_general();
    t.crud.deleteManycm_staff_general();
  },
});
