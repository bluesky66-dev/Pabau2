import { objectType, extendType } from 'nexus';

export const disease = objectType({
  name: 'disease',
  definition(t) {
    t.model.id();
    t.model.company_id();
    t.model.disease_name();
    t.model.create_date();
    t.model.comments();
    t.model.deleted();
    t.model.custom_id();
    t.model.imported();
    t.model.travax_link();
    t.model.nathnac_link();
  },
});

export const diseaseQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.disease();
    t.crud.diseases({ filtering: true, ordering: true });
  },
});

export const diseaseMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnedisease();
    t.crud.updateOnedisease();
    t.crud.upsertOnedisease();
    t.crud.deleteOnedisease();

    t.crud.updateManydisease();
    t.crud.deleteManydisease();
  },
});
