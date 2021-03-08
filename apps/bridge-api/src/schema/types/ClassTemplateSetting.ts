import { objectType, extendType } from 'nexus';

export const ClassTemplateSetting = objectType({
  name: 'ClassTemplateSetting',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.class_wait_list_template_enable();
    t.model.class_wait_list_template_id();
    t.model.class_wait_list_sms_template_enable();
    t.model.class_wait_list_sms_template_id();
    t.model.uid();
    t.model.creation_date();
    t.model.modified_date();
  },
});

export const classTemplateSettingQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classTemplateSetting();
    t.crud.classTemplateSettings({ filtering: true, ordering: true });

    t.field('classTemplateSettingsCount', {
      type: 'Int',
      args: {
        where: 'ClassTemplateSettingWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classTemplateSetting.count(args);
      },
    });
  },
});

export const classTemplateSettingMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassTemplateSetting();
    t.crud.updateOneClassTemplateSetting();
    t.crud.upsertOneClassTemplateSetting();
    t.crud.deleteOneClassTemplateSetting();

    t.crud.updateManyClassTemplateSetting();
    t.crud.deleteManyClassTemplateSetting();
  },
});
