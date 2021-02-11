import { objectType, extendType } from 'nexus';

export const cm_extra_gym = objectType({
  name: 'cm_extra_gym',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.primary_goal();
    t.model.intro_class();
    t.model.age_group();
    t.model.occupier();
    t.model.skill_level();
    t.model.membership();
  },
});

export const cm_extra_gymQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cm_extra_gym();
    t.crud.cm_extra_gyms({ filtering: true, ordering: true });
  },
});

export const cm_extra_gymMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecm_extra_gym();
    t.crud.updateOnecm_extra_gym();
    t.crud.upsertOnecm_extra_gym();
    t.crud.deleteOnecm_extra_gym();

    t.crud.updateManycm_extra_gym();
    t.crud.deleteManycm_extra_gym();
  },
});
