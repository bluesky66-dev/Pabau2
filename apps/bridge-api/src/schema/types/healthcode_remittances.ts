import { objectType, extendType } from 'nexus';

export const healthcode_remittances = objectType({
  name: 'healthcode_remittances',
  definition(t) {
    t.model.id();
    t.model.uid();
    t.model.company();
    t.model.Status();
    t.model.MsgId();
    t.model.MsgIssueDate();
    t.model.MsgSender();
    t.model.MsgRecipient();
    t.model.Insurer();
    t.model.ProviderNo();
    t.model.PaymentReference();
    t.model.ProcessDate();
    t.model.PaymentDate();
    t.model.PaymentMethod();
    t.model.BankAccountHash();
    t.model.Cuid();
    t.model.CHClaimNo();
    t.model.PayorClaimNo();
    t.model.InvoiceNo();
    t.model.InvoiceDate();
    t.model.ClaimAmt();
    t.model.PaidAmt();
    t.model.PrevPaidAmt();
    t.model.ShortAmt();
    t.model.InvoiceRef();
    t.model.RegistrationNo();
    t.model.PatientInitials();
    t.model.PatientName_FamilyName();
    t.model.PatientName_MiddleName();
    t.model.PatientName_GivenName();
    t.model.BankSortCode();
  },
});

export const healthcode_remittancesQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.healthcode_remittances();
    t.crud.healthcode_remittances({ filtering: true, ordering: true });
  },
});

export const healthcode_remittancesMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOnehealthcode_remittances();
    t.crud.updateOnehealthcode_remittances();
    t.crud.upsertOnehealthcode_remittances();
    t.crud.deleteOnehealthcode_remittances();

    t.crud.updateManyhealthcode_remittances();
    t.crud.deleteManyhealthcode_remittances();
  },
});
