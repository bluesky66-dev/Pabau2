import { objectType, extendType } from 'nexus';

export const migrations = objectType({
  name: 'migrations',
  definition(t) {
    t.model.id();
    t.model.sql_output();
    t.model.sql_result();
    t.model.php_output();
    t.model.php_result();
    t.model.name();
    t.model.date();
  },
});

export const migrationsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.migrations();
    t.crud.migrations({ filtering: true, ordering: true });
  },
});

export const migrationsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnemigrations();
    t.crud.updateOnemigrations();
    t.crud.upsertOnemigrations();
    t.crud.deleteOnemigrations();

    t.crud.updateManymigrations();
    t.crud.deleteManymigrations();
  },
});
