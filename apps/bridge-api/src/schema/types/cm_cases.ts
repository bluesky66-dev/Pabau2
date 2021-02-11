import { objectType, extendType } from 'nexus';

export const cm_cases = objectType({
  name: 'cm_cases',
  definition(t) {
    t.model.id();
    t.model.case_number();
    t.model.occupier();
    t.model.type();
    t.model.contact();
    t.model.email();
    t.model.subject();
    t.model.phone();
    t.model.request();
    t.model.critical();
    t.model.description();
    t.model.related_to();
    t.model.module_type();
    t.model.user_id();
    t.model.module2_type();
    t.model.user2_id();
    t.model.ownerid();
    t.model.status();
    t.model.priority();
    t.model.reason();
    t.model.reported_by();
    t.model.comments();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_casesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_cases();
    t.crud.cm_cases({ filtering: true, ordering: true });
  },
});

export const cm_casesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_cases();
    t.crud.updateOnecm_cases();
    t.crud.upsertOnecm_cases();
    t.crud.deleteOnecm_cases();

    t.crud.updateManycm_cases();
    t.crud.deleteManycm_cases();
  },
});
