import { objectType, extendType } from 'nexus';

export const rota_shifts = objectType({
  name: 'rota_shifts',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.start();
    t.model.end();
    t.model.occupier();
    t.model.notes();
    t.model.last_seen();
    t.model.last_modified();
    t.model.last_notified();
    t.model.last_published();
    t.model.first_created();
    t.model.user_created();
    t.model.repeat_id();
    t.model.reason_code();
    t.model.reason_data();
    t.model.holiday_id();
    t.model.cal_id();
    t.model.is_cal();
    t.model.note_color();
    t.model.location_id();
    t.model.request();
    t.model.sickness();
    t.model.imported();
    t.model.tag_name();
    t.model.room_id();
    t.model.force_created();
  },
});

export const rota_shiftsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.rota_shifts();
    t.crud.rota_shifts({ filtering: true, ordering: true });
  },
});

export const rota_shiftsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnerota_shifts();
    t.crud.updateOnerota_shifts();
    t.crud.upsertOnerota_shifts();
    t.crud.deleteOnerota_shifts();

    t.crud.updateManyrota_shifts();
    t.crud.deleteManyrota_shifts();
  },
});
