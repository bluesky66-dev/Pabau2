import { objectType, extendType } from 'nexus';

export const waiting_list_invites = objectType({
  name: 'waiting_list_invites',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
    t.model.last_invite();
  },
});

export const waiting_list_invitesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.waiting_list_invites();
    t.crud.waiting_list_invites({ filtering: true, ordering: true });
  },
});

export const waiting_list_invitesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnewaiting_list_invites();
    t.crud.updateOnewaiting_list_invites();
    t.crud.upsertOnewaiting_list_invites();
    t.crud.deleteOnewaiting_list_invites();

    t.crud.updateManywaiting_list_invites();
    t.crud.deleteManywaiting_list_invites();
  },
});
