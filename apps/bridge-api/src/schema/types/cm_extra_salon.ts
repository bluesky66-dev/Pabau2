import { objectType, extendType } from 'nexus';

export const cm_extra_salon = objectType({
  name: 'cm_extra_salon',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.primary_service();
    t.model.hair_length();
    t.model.hair_texture();
    t.model.occupier();
    t.model.skin_type();
  },
});

export const cm_extra_salonQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_extra_salon();
    t.crud.cm_extra_salons({ filtering: true, ordering: true });
  },
});

export const cm_extra_salonMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_extra_salon();
    t.crud.updateOnecm_extra_salon();
    t.crud.upsertOnecm_extra_salon();
    t.crud.deleteOnecm_extra_salon();

    t.crud.updateManycm_extra_salon();
    t.crud.deleteManycm_extra_salon();
  },
});
