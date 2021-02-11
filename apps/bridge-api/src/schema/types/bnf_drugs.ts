import { objectType, extendType } from 'nexus';

export const bnf_drugs = objectType({
  name: 'bnf_drugs',
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.page();
    t.model.drug_name();
    t.model.indications_dosage();
    t.model.contra_indications();
    t.model.cautions();
    t.model.side_effects();
    t.model.pregnancy();
    t.model.breast_feeding();
    t.model.prescribing_info();
    t.model.patient_advice();
    t.model.directions();
    t.model.specific_info();
  },
});

export const bnf_drugsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bnf_drugs();
    t.crud.bnf_drugs({ filtering: true, ordering: true });
  },
});

export const bnf_drugsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnebnf_drugs();
    t.crud.updateOnebnf_drugs();
    t.crud.upsertOnebnf_drugs();
    t.crud.deleteOnebnf_drugs();

    t.crud.updateManybnf_drugs();
    t.crud.deleteManybnf_drugs();
  },
});
