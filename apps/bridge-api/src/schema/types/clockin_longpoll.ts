import { objectType, extendType } from 'nexus';

export const clockin_longpoll = objectType({
  name: 'clockin_longpoll',
  definition(t) {
    t.model.id();
    t.model.clocked_out();
    t.model.uid();
    t.model.occupier();
  },
});

export const clockin_longpollQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.clockin_longpoll();
    t.crud.clockin_longpolls({ filtering: true, ordering: true });
  },
});

export const clockin_longpollMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneclockin_longpoll();
    t.crud.updateOneclockin_longpoll();
    t.crud.upsertOneclockin_longpoll();
    t.crud.deleteOneclockin_longpoll();

    t.crud.updateManyclockin_longpoll();
    t.crud.deleteManyclockin_longpoll();
  },
});
