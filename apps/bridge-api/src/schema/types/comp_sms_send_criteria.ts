import { objectType, extendType } from 'nexus';

export const comp_sms_send_criteria = objectType({
  name: 'comp_sms_send_criteria',
  definition(t) {
    t.model.id();
    t.model.interest_area();
    t.model.area_item_id();
    t.model.comm_id();
    t.model.company_id();
  },
});

export const comp_sms_send_criteriaQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.comp_sms_send_criteria();
    t.crud.comp_sms_send_criteria({ filtering: true, ordering: true });
  },
});

export const comp_sms_send_criteriaMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecomp_sms_send_criteria();
    t.crud.updateOnecomp_sms_send_criteria();
    t.crud.upsertOnecomp_sms_send_criteria();
    t.crud.deleteOnecomp_sms_send_criteria();

    t.crud.updateManycomp_sms_send_criteria();
    t.crud.deleteManycomp_sms_send_criteria();
  },
});
