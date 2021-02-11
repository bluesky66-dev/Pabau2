import { objectType, extendType } from 'nexus';

export const dont_birthday_me = objectType({
  name: 'dont_birthday_me',
  definition(t) {
    t.model.id();
    t.model.contact_id();
    t.model.company_id();
  },
});

export const dont_birthday_meQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.dont_birthday_me();
    t.crud.dont_birthday_mes({ filtering: true, ordering: true });
  },
});

export const dont_birthday_meMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedont_birthday_me();
    t.crud.updateOnedont_birthday_me();
    t.crud.upsertOnedont_birthday_me();
    t.crud.deleteOnedont_birthday_me();

    t.crud.updateManydont_birthday_me();
    t.crud.deleteManydont_birthday_me();
  },
});
