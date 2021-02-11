import { objectType, extendType } from 'nexus';

export const loyalty_log = objectType({
  name: 'loyalty_log',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.contact_id();
    t.model.amount();
    t.model.promotion_type();
    t.model.sale_id();
    t.model.date();
    t.model.user_id();
    t.model.updated_on();
    t.model.description();
  },
});

export const loyalty_logQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.loyalty_log();
    t.crud.loyalty_logs({ filtering: true, ordering: true });
  },
});

export const loyalty_logMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneloyalty_log();
    t.crud.updateOneloyalty_log();
    t.crud.upsertOneloyalty_log();
    t.crud.deleteOneloyalty_log();

    t.crud.updateManyloyalty_log();
    t.crud.deleteManyloyalty_log();
  },
});
