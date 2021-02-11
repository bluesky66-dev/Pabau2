import { objectType, extendType } from 'nexus';

export const cm_refs = objectType({
  name: 'cm_refs',
  definition(t) {
    t.model.id();
    t.model.refby();
    t.model.refto();
    t.model.date();
    t.model.status();
    t.model.occupier();
    t.model.sent_to_email();
    t.model.sent_to_sms();
    t.model.refferer_thanked_email();
    t.model.refferer_thanked_sms();
    t.model.refferer_thanked_voucher();
    t.model.refferee_thanked_email();
    t.model.refferee_thanked_sms();
    t.model.referee_thanked_voucher();
    t.model.sent_to_name();
    t.model.referred_by_name();
  },
});

export const cm_refsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_refs();
    t.crud.cm_refs({ filtering: true, ordering: true });
  },
});

export const cm_refsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_refs();
    t.crud.updateOnecm_refs();
    t.crud.upsertOnecm_refs();
    t.crud.deleteOnecm_refs();

    t.crud.updateManycm_refs();
    t.crud.deleteManycm_refs();
  },
});
