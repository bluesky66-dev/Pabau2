import { objectType, extendType } from 'nexus';

export const connect_theme = objectType({
  name: 'connect_theme',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.title();
    t.model.bgcolor();
    t.model.bgimage();
    t.model.logoimage();
    t.model.customtitle();
    t.model.customcontent();
    t.model.headercolor();
    t.model.footercolor();
    t.model.buttoncolor();
    t.model.boxshadowcolor();
    t.model.timecolor();
    t.model.fontcolor();
    t.model.buttontextcolor();
    t.model.linkcolor();
  },
});

export const connect_themeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.connect_theme();
    t.crud.connect_themes({ filtering: true, ordering: true });
  },
});

export const connect_themeMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneconnect_theme();
    t.crud.updateOneconnect_theme();
    t.crud.upsertOneconnect_theme();
    t.crud.deleteOneconnect_theme();

    t.crud.updateManyconnect_theme();
    t.crud.deleteManyconnect_theme();
  },
});
