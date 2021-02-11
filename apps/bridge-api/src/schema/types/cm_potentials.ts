import { objectType, extendType } from 'nexus';

export const cm_potentials = objectType({
  name: 'cm_potentials',
  definition(t) {
    t.model.ID();
    t.model.OwnerID();
    t.model.Occupier();
    t.model.PotentialName();
    t.model.Amount();
    t.model.ClosingDate();
    t.model.PotentialCompany();
    t.model.Stage();
    t.model.Probability();
    t.model.Type();
    t.model.NextStep();
    t.model.ExpectedRevenue();
    t.model.LeadSource();
    t.model.ContactID();
    t.model.Description();
    t.model.Status();
    t.model.CreatedDate();
    t.model.IpAddress();
    t.model.LeadID();
  },
});

export const cm_potentialsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_potentials();
    t.crud.cm_potentials({ filtering: true, ordering: true });
  },
});

export const cm_potentialsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_potentials();
    t.crud.updateOnecm_potentials();
    t.crud.upsertOnecm_potentials();
    t.crud.deleteOnecm_potentials();

    t.crud.updateManycm_potentials();
    t.crud.deleteManycm_potentials();
  },
});
