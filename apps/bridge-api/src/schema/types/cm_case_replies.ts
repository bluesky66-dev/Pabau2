import { objectType, extendType } from 'nexus';

export const cm_case_replies = objectType({
  name: 'cm_case_replies',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.CaseID();
    t.model.Description();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.CompanyID();
  },
});

export const cm_case_repliesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_case_replies();
    t.crud.cm_case_replies({ filtering: true, ordering: true });
  },
});

export const cm_case_repliesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_case_replies();
    t.crud.updateOnecm_case_replies();
    t.crud.upsertOnecm_case_replies();
    t.crud.deleteOnecm_case_replies();

    t.crud.updateManycm_case_replies();
    t.crud.deleteManycm_case_replies();
  },
});
