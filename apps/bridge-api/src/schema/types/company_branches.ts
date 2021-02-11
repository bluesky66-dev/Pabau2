import { objectType, extendType } from 'nexus';

export const company_branches = objectType({
  name: 'company_branches',
  definition(t) {
    t.model.id();
    t.model.group_id();
    t.model.company_id();
    t.model.address();
    t.model.street();
    t.model.city();
    t.model.county();
    t.model.name();
    t.model.postcode();
    t.model.online_bookings();
    t.model.phone();
    t.model.website();
    t.model.is_active();
    t.model.bookable_online();
    t.model.calendar_bookable();
    t.model.is_default();
    t.model.lat();
    t.model.lng();
    t.model.custom_id();
    t.model.email();
    t.model.send_conf_email();
    t.model.show_online();
    t.model.loc_order();
    t.model.region();
    t.model.invoice_template_id();
    t.model.color();
    t.model.notify_on_lead();
    t.model.notice();
  },
});

export const company_branchesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.company_branches();
    t.crud.company_branches({ filtering: true, ordering: true });
  },
});

export const company_branchesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnecompany_branches();
    t.crud.updateOnecompany_branches();
    t.crud.upsertOnecompany_branches();
    t.crud.deleteOnecompany_branches();

    t.crud.updateManycompany_branches();
    t.crud.deleteManycompany_branches();
  },
});
