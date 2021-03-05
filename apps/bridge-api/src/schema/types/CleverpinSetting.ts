import { objectType, extendType } from 'nexus';

export const CleverpinSetting = objectType({
  name: 'CleverpinSetting',
  definition(t) {
    t.model.id();
    t.model.image_url();
    t.model.company_id();
  },
});

export const cleverpinSettingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cleverpinSetting();
    t.crud.cleverpinSettings({ filtering: true, ordering: true });

    t.field('cleverpinSettingsCount', {
      type: 'Int',
      args: {
        where: 'CleverpinSettingWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cleverpinSetting.count(args);
      },
    });
  },
});

export const cleverpinSettingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCleverpinSetting();
    t.crud.updateOneCleverpinSetting();
    t.crud.upsertOneCleverpinSetting();
    t.crud.deleteOneCleverpinSetting();

    t.crud.updateManyCleverpinSetting();
    t.crud.deleteManyCleverpinSetting();
  },
});
