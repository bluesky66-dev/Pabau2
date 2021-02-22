import { objectType, extendType } from 'nexus';

export const BnfDrug = objectType({
  name: 'BnfDrug',
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

export const bnfDrugQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.bnfDrug();
    t.crud.bnfDrugs({ filtering: true, ordering: true });

    t.field('bnfDrugsCount', {
      type: 'Int',
      args: {
        where: 'BnfDrugWhereInput',
      },
      async resolve(_root, args, ctx) {
        return ctx.prisma.bnfDrug.count(args);
      },
    });
  },
});

export const bnfDrugMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneBnfDrug();
    t.crud.updateOneBnfDrug();
    t.crud.upsertOneBnfDrug();
    t.crud.deleteOneBnfDrug();

    t.crud.updateManyBnfDrug();
    t.crud.deleteManyBnfDrug();
  },
});
