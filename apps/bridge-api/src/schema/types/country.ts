import { objectType, extendType } from 'nexus';

export const country = objectType({
  name: 'country',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.iso2();
    t.model.iso3();
    t.model.iso3_number();
  },
});

export const countryQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.country();
    t.crud.countries({ filtering: true, ordering: true });
  },
});

export const countryMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecountry();
    t.crud.updateOnecountry();
    t.crud.upsertOnecountry();
    t.crud.deleteOnecountry();

    t.crud.updateManycountry();
    t.crud.deleteManycountry();
  },
});
