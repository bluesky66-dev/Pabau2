import { objectType, extendType } from 'nexus';

export const clinical_softwares = objectType({
  name: 'clinical_softwares',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.difficulty();
    t.model.frequency();
  },
});

export const clinical_softwaresQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.clinical_softwares();
    t.crud.clinical_softwares({ filtering: true, ordering: true });
  },
});

export const clinical_softwaresMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclinical_softwares();
    t.crud.updateOneclinical_softwares();
    t.crud.upsertOneclinical_softwares();
    t.crud.deleteOneclinical_softwares();

    t.crud.updateManyclinical_softwares();
    t.crud.deleteManyclinical_softwares();
  },
});
