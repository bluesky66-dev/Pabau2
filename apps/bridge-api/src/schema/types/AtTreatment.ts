import { objectType, extendType } from 'nexus';

export const AtTreatment = objectType({
  name: 'AtTreatment',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.name();
    t.model.image();
    t.model.description();
  },
});

export const atTreatmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atTreatment();
    t.crud.atTreatments({ filtering: true, ordering: true , pagination: true });

    t.field('atTreatmentsCount', {
      type: 'Int',
      args: {
        where: 'AtTreatmentWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atTreatment.count(args);
      },
    });
  },
});

export const atTreatmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtTreatment();
    t.crud.updateOneAtTreatment();
    t.crud.upsertOneAtTreatment();
    t.crud.deleteOneAtTreatment();

    t.crud.updateManyAtTreatment();
    t.crud.deleteManyAtTreatment();
  },
});
