import { objectType, extendType } from 'nexus';

export const healthcode_submittals = objectType({
  name: 'healthcode_submittals',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.data_json();
    t.model.data_xml();
    t.model.data_soap();
    t.model.date_inserted();
    t.model.status();
    t.model.response_data();
    t.model.invoice_id();
    t.model.date_updated();
    t.model.structured_errors();
    t.model.healthcode_id();
  },
});

export const healthcode_submittalsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.healthcode_submittals();
    t.crud.healthcode_submittals({ filtering: true, ordering: true });
  },
});

export const healthcode_submittalsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnehealthcode_submittals();
    t.crud.updateOnehealthcode_submittals();
    t.crud.upsertOnehealthcode_submittals();
    t.crud.deleteOnehealthcode_submittals();

    t.crud.updateManyhealthcode_submittals();
    t.crud.deleteManyhealthcode_submittals();
  },
});
