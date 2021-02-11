import { objectType, extendType } from 'nexus';

export const import_helper_attachment = objectType({
  name: 'import_helper_attachment',
  definition(t) {
    t.model.id();
    t.model.col0();
    t.model.col1();
    t.model.col2();
    t.model.col3();
    t.model.col4();
    t.model.col5();
    t.model.col6();
    t.model.col7();
    t.model.col8();
    t.model.company_id();
    t.model.batch_no();
    t.model.full_url();
    t.model.contact_id();
    t.model.sync();
    t.model.attach_id();
    t.model.system_id();
    t.model.attach_date();
    t.model.col15();
    t.model.col9();
    t.model.uploader_id();
    t.model.col16();
    t.model.col17();
    t.model.col18();
    t.model.col19();
    t.model.col20();
    t.model.actual_file_name();
  },
});

export const import_helper_attachmentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.import_helper_attachment();
    t.crud.import_helper_attachments({ filtering: true, ordering: true });
  },
});

export const import_helper_attachmentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneimport_helper_attachment();
    t.crud.updateOneimport_helper_attachment();
    t.crud.upsertOneimport_helper_attachment();
    t.crud.deleteOneimport_helper_attachment();

    t.crud.updateManyimport_helper_attachment();
    t.crud.deleteManyimport_helper_attachment();
  },
});
