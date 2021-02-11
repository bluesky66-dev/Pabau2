import { objectType, extendType } from 'nexus';

export const class_master = objectType({
  name: 'class_master',
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

export const class_masterQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.class_master();
    t.crud.class_masters({ filtering: true, ordering: true });
  },
});

export const class_masterMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclass_master();
    t.crud.updateOneclass_master();
    t.crud.upsertOneclass_master();
    t.crud.deleteOneclass_master();

    t.crud.updateManyclass_master();
    t.crud.deleteManyclass_master();
  },
});
