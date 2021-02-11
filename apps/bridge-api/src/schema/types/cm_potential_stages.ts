import { objectType, extendType } from 'nexus';

export const cm_potential_stages = objectType({
  name: 'cm_potential_stages',
  definition(t) {
    t.model.ID();
    t.model.PotentialID();
    t.model.Amount();
    t.model.ClosingDate();
    t.model.Stage();
    t.model.Probability();
    t.model.ExpectedRevenue();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_potential_stagesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_potential_stages();
    t.crud.cm_potential_stages({ filtering: true, ordering: true });
  },
});

export const cm_potential_stagesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_potential_stages();
    t.crud.updateOnecm_potential_stages();
    t.crud.upsertOnecm_potential_stages();
    t.crud.deleteOnecm_potential_stages();

    t.crud.updateManycm_potential_stages();
    t.crud.deleteManycm_potential_stages();
  },
});
