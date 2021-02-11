import { objectType, extendType } from 'nexus';

export const cm_compaigns = objectType({
  name: 'cm_compaigns',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.Occupier();
    t.model.CompaignName();
    t.model.Type();
    t.model.Status();
    t.model.StartDate();
    t.model.EndDate();
    t.model.ExpectedRevenue();
    t.model.BudgetedCost();
    t.model.ActualCost();
    t.model.ExpectedResponse();
    t.model.NumSent();
    t.model.Description();
    t.model.CreatedDate();
    t.model.IpAddress();
  },
});

export const cm_compaignsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_compaigns();
    t.crud.cm_compaigns({ filtering: true, ordering: true });
  },
});

export const cm_compaignsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_compaigns();
    t.crud.updateOnecm_compaigns();
    t.crud.upsertOnecm_compaigns();
    t.crud.deleteOnecm_compaigns();

    t.crud.updateManycm_compaigns();
    t.crud.deleteManycm_compaigns();
  },
});
