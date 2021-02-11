import { objectType, extendType } from 'nexus';

export const import_details = objectType({
  name: 'import_details',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.import_type();
    t.model.date();
    t.model.file_name();
    t.model.old_name();
    t.model.entries();
    t.model.empty_rows();
    t.model.key();
    t.model.linkref();
    t.model.json_data();
    t.model.import_status();
    t.model.start_date();
    t.model.end_date();
    t.model.ins_match();
    t.model.con_match();
    t.model.pro_match();
    t.model.dob_match();
    t.model.mem_match();
    t.model.appt_proc();
    t.model.treat_match();
    t.model.appt_issue();
    t.model.appt_room();
    t.model.appt_con();
    t.model.appt_ser();
    t.model.appt_use();
    t.model.rota_proc();
    t.model.rota_use();
    t.model.rota_loc();
    t.model.rota_room();
    t.model.class_proc();
    t.model.classm_proc();
    t.model.serv_cat();
    t.model.prod_cat();
    t.model.appt_loc();
    t.model.appt_bookout();
    t.model.left_to_match();
    t.model.con_mar();
    t.model.inv_proc();
    t.model.inv_loc();
    t.model.inv_help();
    t.model.inv_biller();
  },
});

export const import_detailsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.import_details();
    t.crud.import_details({ filtering: true, ordering: true });
  },
});

export const import_detailsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneimport_details();
    t.crud.updateOneimport_details();
    t.crud.upsertOneimport_details();
    t.crud.deleteOneimport_details();

    t.crud.updateManyimport_details();
    t.crud.deleteManyimport_details();
  },
});
