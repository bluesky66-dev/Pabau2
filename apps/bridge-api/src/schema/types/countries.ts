import { objectType, extendType } from 'nexus';

export const countries = objectType({
  name: 'countries',
  definition(t) {
    t.model.CountryCode();
    t.model.country_name();
    t.model.Currency();
    t.model.Continent();
    t.model.country_id();
    t.model.phone_prefix();
    t.model.sms_base_rate();
    t.model.date_format();
    t.model.tax_name();
    t.model.sms_multiplier();
    t.model.general_information();
    t.model.vaccine_recommendations();
    t.model.other_risks();
    t.model.outbreaks();
    t.model.malaria();
    t.model.nathnac_url();
    t.model.travax_url();
    t.model.gmaps_url();
    t.model.custom_id();
  },
});

export const countriesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.countries();
    t.crud.countries({ filtering: true, ordering: true });
  },
});

export const countriesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecountries();
    t.crud.updateOnecountries();
    t.crud.upsertOnecountries();
    t.crud.deleteOnecountries();

    t.crud.updateManycountries();
    t.crud.deleteManycountries();
  },
});
