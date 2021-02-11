import { objectType, extendType } from 'nexus';

export const drugs = objectType({
  name: 'drugs',
  definition(t) {
    t.model.id();
    t.model.external_id();
    t.model.dosage();
    t.model.legalClass();
    t.model.name();
    t.model.sortOrder();
    t.model.sectionName();
    t.model.subSectionName();
    t.model.manufacturerName();
    t.model.pharmaClass();
    t.model.ingredients();
    t.model.price();
    t.model.quantities();
    t.model.generic();
    t.model.indications();
    t.model.warning();
    t.model.interactions();
    t.model.contraint();
    t.model.sideEffects();
    t.model.term();
  },
});

export const drugsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.drugs();
    t.crud.drugs({ filtering: true, ordering: true });
  },
});

export const drugsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedrugs();
    t.crud.updateOnedrugs();
    t.crud.upsertOnedrugs();
    t.crud.deleteOnedrugs();

    t.crud.updateManydrugs();
    t.crud.deleteManydrugs();
  },
});
