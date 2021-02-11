import { objectType, extendType } from 'nexus';

export const partners_partner = objectType({
  name: 'partners_partner',
  definition(t) {
    t.model.id();
    t.model.partner_name();
    t.model.partner_email();
    t.model.status();
    t.model.created_date();
    t.model.partner_type();
    t.model.include_sms();
    t.model.recurring();
  },
});

export const partners_partnerQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.partners_partner();
    t.crud.partners_partners({ filtering: true, ordering: true });
  },
});

export const partners_partnerMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepartners_partner();
    t.crud.updateOnepartners_partner();
    t.crud.upsertOnepartners_partner();
    t.crud.deleteOnepartners_partner();

    t.crud.updateManypartners_partner();
    t.crud.deleteManypartners_partner();
  },
});
