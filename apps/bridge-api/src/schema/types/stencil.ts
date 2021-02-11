import { objectType, extendType } from 'nexus';

export const stencil = objectType({
  name: 'stencil',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.url();
    t.model.stencil_order();
    t.model.angle();
  },
});

export const stencilQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.stencil();
    t.crud.stencils({ filtering: true, ordering: true });
  },
});

export const stencilMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestencil();
    t.crud.updateOnestencil();
    t.crud.upsertOnestencil();
    t.crud.deleteOnestencil();

    t.crud.updateManystencil();
    t.crud.deleteManystencil();
  },
});
