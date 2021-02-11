import { objectType, extendType } from 'nexus';

export const cashup_report_custom = objectType({
  name: 'cashup_report_custom',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.location_id();
    t.model.cashup_date();
    t.model.custom_type();
    t.model.custom_amount();
    t.model.custom_actual();
    t.model.custom_difference();
    t.model.card_type();
  },
});

export const cashup_report_customQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cashup_report_custom();
    t.crud.cashup_report_customs({ filtering: true, ordering: true });
  },
});

export const cashup_report_customMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecashup_report_custom();
    t.crud.updateOnecashup_report_custom();
    t.crud.upsertOnecashup_report_custom();
    t.crud.deleteOnecashup_report_custom();

    t.crud.updateManycashup_report_custom();
    t.crud.deleteManycashup_report_custom();
  },
});
