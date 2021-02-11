import { objectType, extendType } from 'nexus';

export const cm_wallpost_comment = objectType({
  name: 'cm_wallpost_comment',
  definition(t) {
    t.model.ID();
    t.model.activitytId();
    t.model.userId();
    t.model.comment();
    t.model.time();
    t.model.ipAddress();
  },
});

export const cm_wallpost_commentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_wallpost_comment();
    t.crud.cm_wallpost_comments({ filtering: true, ordering: true });
  },
});

export const cm_wallpost_commentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_wallpost_comment();
    t.crud.updateOnecm_wallpost_comment();
    t.crud.upsertOnecm_wallpost_comment();
    t.crud.deleteOnecm_wallpost_comment();

    t.crud.updateManycm_wallpost_comment();
    t.crud.deleteManycm_wallpost_comment();
  },
});
