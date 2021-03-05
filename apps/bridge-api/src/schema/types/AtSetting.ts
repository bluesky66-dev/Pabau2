import { objectType, extendType } from 'nexus';

export const AtSetting = objectType({
  name: 'AtSetting',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.logo();
    t.model.background();
    t.model.font_family();
  },
});

export const atSettingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.atSetting();
    t.crud.atSettings({ filtering: true, ordering: true });

    t.field('atSettingsCount', {
      type: 'Int',
      args: {
        where: 'AtSettingWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.atSetting.count(args);
      },
    });
  },
});

export const atSettingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneAtSetting();
    t.crud.updateOneAtSetting();
    t.crud.upsertOneAtSetting();
    t.crud.deleteOneAtSetting();

    t.crud.updateManyAtSetting();
    t.crud.deleteManyAtSetting();
  },
});
