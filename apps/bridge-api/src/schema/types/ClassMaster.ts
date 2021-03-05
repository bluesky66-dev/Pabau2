import { objectType, extendType } from 'nexus';

export const ClassMaster = objectType({
  name: 'ClassMaster',
  definition(t) {
    t.model.c_id();
    t.model.c_companyid();
    t.model.c_type();
    t.model.c_teacher();
    t.model.c_location();
    t.model.c_room();
    t.model.c_slots();
    t.model.c_price();
    t.model.c_date();
    t.model.c_time();
    t.model.c_duration();
    t.model.c_day();
    t.model.c_exptime();
    t.model.c_book();
    t.model.c_empty();
    t.model.c_formattime();
    t.model.c_startformattime();
    t.model.class_pay();
    t.model.cancel_status();
    t.model.product_id();
    t.model.sign_in_type();
  },
});

export const classMasterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.classMaster();
    t.crud.classMasters({ filtering: true, ordering: true });

    t.field('classMastersCount', {
      type: 'Int',
      args: {
        where: 'ClassMasterWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.classMaster.count(args);
      },
    });
  },
});

export const classMasterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneClassMaster();
    t.crud.updateOneClassMaster();
    t.crud.upsertOneClassMaster();
    t.crud.deleteOneClassMaster();

    t.crud.updateManyClassMaster();
    t.crud.deleteManyClassMaster();
  },
});
