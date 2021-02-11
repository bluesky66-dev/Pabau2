import { objectType, extendType } from 'nexus';

export const timezone = objectType({
  name: 'timezone',
  definition(t) {
    t.model.timezone_id();
    t.model.label();
    t.model.php_format();
    t.model.db_format();
    t.model.offset_seconds();
    t.model.supported();
    t.model.company_details();
  },
});

export const timezoneQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.timezone();
    t.crud.timezones({ filtering: true, ordering: true });
  },
});

export const timezoneMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnetimezone();
    t.crud.updateOnetimezone();
    t.crud.upsertOnetimezone();
    t.crud.deleteOnetimezone();

    t.crud.updateManytimezone();
    t.crud.deleteManytimezone();
  },
});
