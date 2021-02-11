import { objectType, extendType } from 'nexus';

export const phpbirthday = objectType({
  name: 'phpbirthday',
  definition(t) {
    t.model.Name();
    t.model.Address();
    t.model.City();
    t.model.entrydate();
    t.model.Postal();
    t.model.Country();
    t.model.B_Date();
    t.model.IP_Address();
    t.model.ID();
    t.model.H_Phone();
    t.model.M_Phone();
    t.model.Email();
    t.model.University();
    t.model.Group();
    t.model.Occupier();
    t.model.fb_id();
    t.model.Gender();
    t.model.visible();
    t.model.bday_email();
    t.model.bday_sms();
    t.model.bday_letter();
    t.model.bday_email_date();
  },
});

export const phpbirthdayQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.phpbirthday();
    t.crud.phpbirthdays({ filtering: true, ordering: true });
  },
});

export const phpbirthdayMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnephpbirthday();
    t.crud.updateOnephpbirthday();
    t.crud.upsertOnephpbirthday();
    t.crud.deleteOnephpbirthday();

    t.crud.updateManyphpbirthday();
    t.crud.deleteManyphpbirthday();
  },
});
