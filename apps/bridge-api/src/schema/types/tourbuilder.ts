import { objectType, extendType } from 'nexus';

export const tourbuilder = objectType({
  name: 'tourbuilder',
  definition(t) {
    t.model.uid();
    t.model.status();
    t.model.status1();
    t.model.status2();
    t.model.status3();
    t.model.status4();
    t.model.status5();
    t.model.status6();
    t.model.status7();
    t.model.status8();
    t.model.status9();
    t.model.status10();
    t.model.status11();
    t.model.status12();
    t.model.status13();
    t.model.status14();
    t.model.id();
  },
});

export const tourbuilderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tourbuilder();
    t.crud.tourbuilders({ filtering: true, ordering: true });
  },
});

export const tourbuilderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetourbuilder();
    t.crud.updateOnetourbuilder();
    t.crud.upsertOnetourbuilder();
    t.crud.deleteOnetourbuilder();

    t.crud.updateManytourbuilder();
    t.crud.deleteManytourbuilder();
  },
});
