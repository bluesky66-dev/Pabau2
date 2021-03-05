import { objectType, extendType } from 'nexus';

export const CmAuthorization = objectType({
  name: 'CmAuthorization',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.appointment_id();
    t.model.contact_id();
    t.model.title();
    t.model.total_sessions();
    t.model.diagnosis_code();
  },
});

export const cmAuthorizationQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmAuthorization();
    t.crud.cmAuthorizations({ filtering: true, ordering: true });

    t.field('cmAuthorizationsCount', {
      type: 'Int',
      args: {
        where: 'CmAuthorizationWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmAuthorization.count(args);
      },
    });
  },
});

export const cmAuthorizationMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmAuthorization();
    t.crud.updateOneCmAuthorization();
    t.crud.upsertOneCmAuthorization();
    t.crud.deleteOneCmAuthorization();

    t.crud.updateManyCmAuthorization();
    t.crud.deleteManyCmAuthorization();
  },
});
