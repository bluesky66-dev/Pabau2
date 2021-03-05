import { objectType, extendType } from 'nexus';

export const CmCaseReply = objectType({
  name: 'CmCaseReply',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.CaseID();
    t.model.Description();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.CompanyID();
    t.model.company();
  },
});

export const cmCaseReplyQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmCaseReply();
    t.crud.cmCaseReplies({ filtering: true, ordering: true });

    t.field('cmCaseRepliesCount', {
      type: 'Int',
      args: {
        where: 'CmCaseReplyWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmCaseReply.count(args);
      },
    });
  },
});

export const cmCaseReplyMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmCaseReply();
    t.crud.updateOneCmCaseReply();
    t.crud.upsertOneCmCaseReply();
    t.crud.deleteOneCmCaseReply();

    t.crud.updateManyCmCaseReply();
    t.crud.deleteManyCmCaseReply();
  },
});
