import { objectType, extendType } from 'nexus';

export const bookitpro_slider = objectType({
  name: 'bookitpro_slider',
  definition(t) {
    t.model.id();
    t.model.slider1();
    t.model.slider2();
    t.model.slider3();
    t.model.slider4();
    t.model.occupier();
  },
});

export const bookitpro_sliderQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bookitpro_slider();
    t.crud.bookitpro_sliders({ filtering: true, ordering: true });
  },
});

export const bookitpro_sliderMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebookitpro_slider();
    t.crud.updateOnebookitpro_slider();
    t.crud.upsertOnebookitpro_slider();
    t.crud.deleteOnebookitpro_slider();

    t.crud.updateManybookitpro_slider();
    t.crud.deleteManybookitpro_slider();
  },
});
