import { objectType, extendType } from 'nexus';

export const insurer_contracts = objectType({
  name: 'insurer_contracts',
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.insurer_id();
    t.model.company_id();
    t.model.folder_id();
    t.model.contract_type();
    t.model.active();
    t.model.show_bank_details();
    t.model.bank_account();
    t.model.bank_number();
    t.model.sort_code();
    t.model.bank_name();
    t.model.iban();
    t.model.swift();
    t.model.vat_number();
    t.model.imported();
    t.model.private_contract();
    t.model.employee_id();
    t.model.full_address();
    t.model.registered_company_address();
    t.model.default_address_to();
    t.model.invoice_template_id();
    t.model.location_id();
    t.model.last_update();
    t.model.mp_rule_name();
    t.model.rule_type();
    t.model.second_service();
    t.model.further_service();
    t.model.action_tax_id();
    t.model.custom_id_template();
    t.model.invoice_prefix();
    t.model.invoice_starting_num();
    t.model.custom_id();
  },
});

export const insurer_contractsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.insurer_contracts();
    t.crud.insurer_contracts({ filtering: true, ordering: true });
  },
});

export const insurer_contractsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneinsurer_contracts();
    t.crud.updateOneinsurer_contracts();
    t.crud.upsertOneinsurer_contracts();
    t.crud.deleteOneinsurer_contracts();

    t.crud.updateManyinsurer_contracts();
    t.crud.deleteManyinsurer_contracts();
  },
});
