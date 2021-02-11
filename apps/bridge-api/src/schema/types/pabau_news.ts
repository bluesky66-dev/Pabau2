import { objectType, extendType } from 'nexus';

export const pabau_news = objectType({
  name: 'pabau_news',
  definition(t) {
    t.model.alertid();
    t.model.cid();
    t.model.uid();
    t.model.message();
    t.model.read();
    t.model.entrydate();
    t.model.type();
    t.model.owner_id();
    t.model.image();
    t.model.title();
    t.model.url();
  },
});

export const pabau_newsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.pabau_news();
    t.crud.pabau_news({ filtering: true, ordering: true });
  },
});

export const pabau_newsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnepabau_news();
    t.crud.updateOnepabau_news();
    t.crud.upsertOnepabau_news();
    t.crud.deleteOnepabau_news();

    t.crud.updateManypabau_news();
    t.crud.deleteManypabau_news();
  },
});
