import { objectType, extendType } from 'nexus';

export const CmAppointmentCustom = objectType({
  name: 'CmAppointmentCustom',
  definition(t) {
    t.model.id();
    t.model.appointment_id();
    t.model.occupier();
    t.model.custom_field_id();
    t.model.custom_field_value();
    t.model.imported();
  },
});

export const cmAppointmentCustomQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmAppointmentCustom();
    t.crud.cmAppointmentCustoms({ filtering: true, ordering: true });

    t.field('cmAppointmentCustomsCount', {
      type: 'Int',
      args: {
        where: 'CmAppointmentCustomWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmAppointmentCustom.count(args);
      },
    });
  },
});

export const cmAppointmentCustomMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmAppointmentCustom();
    t.crud.updateOneCmAppointmentCustom();
    t.crud.upsertOneCmAppointmentCustom();
    t.crud.deleteOneCmAppointmentCustom();

    t.crud.updateManyCmAppointmentCustom();
    t.crud.deleteManyCmAppointmentCustom();
  },
});