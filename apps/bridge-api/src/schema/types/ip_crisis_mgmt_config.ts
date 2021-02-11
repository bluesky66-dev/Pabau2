import { objectType, extendType } from 'nexus';

export const ip_crisis_mgmt_config = objectType({
  name: 'ip_crisis_mgmt_config',
  definition(t) {
    t.model.id();
    t.model.mid();
    t.model.score();
    t.model.response_label();
    t.model.answer();
    t.model.frequency();
    t.model.color();
    t.model.escalation();
    t.model.company_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const ip_crisis_mgmt_configQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.ip_crisis_mgmt_config();
    t.crud.ip_crisis_mgmt_configs({ filtering: true, ordering: true });
  },
});

export const ip_crisis_mgmt_configMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneip_crisis_mgmt_config();
    t.crud.updateOneip_crisis_mgmt_config();
    t.crud.upsertOneip_crisis_mgmt_config();
    t.crud.deleteOneip_crisis_mgmt_config();

    t.crud.updateManyip_crisis_mgmt_config();
    t.crud.deleteManyip_crisis_mgmt_config();
  },
});
