import { objectType, extendType } from 'nexus';

export const ClinicalSoftware = objectType({
  name: 'ClinicalSoftware',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.difficulty();
    t.model.frequency();
  },
});

export const clinicalSoftwareQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.clinicalSoftware();
    t.crud.clinicalSoftwares({ filtering: true, ordering: true });

    t.field('clinicalSoftwaresCount', {
      type: 'Int',
      args: {
        where: 'ClinicalSoftwareWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.clinicalSoftware.count(args);
      },
    });
  },
});

export const clinicalSoftwareMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClinicalSoftware();
    t.crud.updateOneClinicalSoftware();
    t.crud.upsertOneClinicalSoftware();
    t.crud.deleteOneClinicalSoftware();

    t.crud.updateManyClinicalSoftware();
    t.crud.deleteManyClinicalSoftware();
  },
});
