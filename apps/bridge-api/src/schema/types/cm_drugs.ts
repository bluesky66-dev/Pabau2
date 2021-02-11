import { objectType, extendType } from 'nexus';

export const cm_drugs = objectType({
  name: 'cm_drugs',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.occupier();
    t.model.dosage();
    t.model.units();
    t.model.frequency();
    t.model.route();
    t.model.comment();
    t.model.is_active();
    t.model.product_id();
    t.model.lot_number();
    t.model.expiry_date();
    t.model.field_order();
    t.model.is_vaccine();
    t.model.is_required();
    t.model.custom_id();
    t.model.max_age();
    t.model.min_age();
    t.model.nathnac_link();
    t.model.travax_link();
  },
});

export const cm_drugsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_drugs();
    t.crud.cm_drugs({ filtering: true, ordering: true });
  },
});

export const cm_drugsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_drugs();
    t.crud.updateOnecm_drugs();
    t.crud.upsertOnecm_drugs();
    t.crud.deleteOnecm_drugs();

    t.crud.updateManycm_drugs();
    t.crud.deleteManycm_drugs();
  },
});
