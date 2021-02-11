import { objectType, extendType } from 'nexus';

export const pabau_paymentplan = objectType({
  name: 'pabau_paymentplan',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.description();
    t.model.amount();
    t.model.interval();
    t.model.payment_day();
    t.model.duration();
    t.model.name();
    t.model.count();
  },
});

export const pabau_paymentplanQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_paymentplan();
    t.crud.pabau_paymentplans({ filtering: true, ordering: true });
  },
});

export const pabau_paymentplanMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_paymentplan();
    t.crud.updateOnepabau_paymentplan();
    t.crud.upsertOnepabau_paymentplan();
    t.crud.deleteOnepabau_paymentplan();

    t.crud.updateManypabau_paymentplan();
    t.crud.deleteManypabau_paymentplan();
  },
});
