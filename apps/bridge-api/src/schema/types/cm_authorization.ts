import { objectType, extendType } from 'nexus';

export const cm_authorization = objectType({
  name: 'cm_authorization',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.appointment_id();
    t.model.contact_id();
    t.model.title();
    t.model.total_sessions();
    t.model.diagnosis_code();
  },
});

export const cm_authorizationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_authorization();
    t.crud.cm_authorizations({ filtering: true, ordering: true });
  },
});

export const cm_authorizationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_authorization();
    t.crud.updateOnecm_authorization();
    t.crud.upsertOnecm_authorization();
    t.crud.deleteOnecm_authorization();

    t.crud.updateManycm_authorization();
    t.crud.deleteManycm_authorization();
  },
});
