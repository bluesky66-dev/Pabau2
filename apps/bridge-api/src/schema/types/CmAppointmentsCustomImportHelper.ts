import { objectType, extendType } from 'nexus';

export const CmAppointmentsCustomImportHelper = objectType({
  name: 'CmAppointmentsCustomImportHelper',
  definition(t) {
    t.model.id();
    t.model.occupier();
    t.model.custom_appointment_id();
    t.model.custom_contact_name();
    t.model.custom_field_name();
    t.model.custom_field_value();
    t.model.added();
    t.model.appointment_id();
  },
});

export const cmAppointmentsCustomImportHelperQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.cmAppointmentsCustomImportHelper();
    t.crud.cmAppointmentsCustomImportHelpers({ filtering: true, ordering: true });

    t.field('cmAppointmentsCustomImportHelpersCount', {
      type: 'Int',
      args: {
        where: 'CmAppointmentsCustomImportHelperWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.cmAppointmentsCustomImportHelper.count(args);
      },
    });
  },
});

export const cmAppointmentsCustomImportHelperMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneCmAppointmentsCustomImportHelper();
    t.crud.updateOneCmAppointmentsCustomImportHelper();
    t.crud.upsertOneCmAppointmentsCustomImportHelper();
    t.crud.deleteOneCmAppointmentsCustomImportHelper();

    t.crud.updateManyCmAppointmentsCustomImportHelper();
    t.crud.deleteManyCmAppointmentsCustomImportHelper();
  },
});
