import { objectType, extendType } from 'nexus';

export const status_page = objectType({
  name: 'status_page',
  definition(t) {
    t.model.id();
    t.model.message();
  },
});

export const status_pageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.status_page();
    t.crud.status_pages({ filtering: true, ordering: true });
  },
});

export const status_pageMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnestatus_page();
    t.crud.updateOnestatus_page();
    t.crud.upsertOnestatus_page();
    t.crud.deleteOnestatus_page();

    t.crud.updateManystatus_page();
    t.crud.deleteManystatus_page();
  },
});
