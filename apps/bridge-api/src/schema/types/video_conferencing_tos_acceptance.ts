import { objectType, extendType } from 'nexus';

export const video_conferencing_tos_acceptance = objectType({
  name: 'video_conferencing_tos_acceptance',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.user_id();
    t.model.accepted_date();
  },
});

export const video_conferencing_tos_acceptanceQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.video_conferencing_tos_acceptance();
    t.crud.video_conferencing_tos_acceptances({ filtering: true, ordering: true });
  },
});

export const video_conferencing_tos_acceptanceMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnevideo_conferencing_tos_acceptance();
    t.crud.updateOnevideo_conferencing_tos_acceptance();
    t.crud.upsertOnevideo_conferencing_tos_acceptance();
    t.crud.deleteOnevideo_conferencing_tos_acceptance();

    t.crud.updateManyvideo_conferencing_tos_acceptance();
    t.crud.deleteManyvideo_conferencing_tos_acceptance();
  },
});
