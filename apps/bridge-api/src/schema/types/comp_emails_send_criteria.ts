import { objectType, extendType } from 'nexus';

export const comp_emails_send_criteria = objectType({
  name: 'comp_emails_send_criteria',
  definition(t) {
    t.model.id();
    t.model.interest_area();
    t.model.area_item_id();
    t.model.comm_id();
    t.model.company_id();
  },
});

export const comp_emails_send_criteriaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.comp_emails_send_criteria();
    t.crud.comp_emails_send_criteria({ filtering: true, ordering: true });
  },
});

export const comp_emails_send_criteriaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecomp_emails_send_criteria();
    t.crud.updateOnecomp_emails_send_criteria();
    t.crud.upsertOnecomp_emails_send_criteria();
    t.crud.deleteOnecomp_emails_send_criteria();

    t.crud.updateManycomp_emails_send_criteria();
    t.crud.deleteManycomp_emails_send_criteria();
  },
});
