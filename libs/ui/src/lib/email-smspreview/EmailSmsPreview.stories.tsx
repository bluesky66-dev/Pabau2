import React, { PropsWithChildren } from 'react'
import EmailSMSPreview, {
  NoShowAppointmentProps,
  EmailSMSPreviewProps,
  BookedOntoClassProps,
  CancelAClassBookingProps,
  ClassRescheduledProps,
  ReminderForClassProps,
  GiftVoucherProps,
  LeadResponsesProps,
  ConnectRegistrationProps,
  MedicalFormProps,
} from './EmailSmsPreview'
import NoShowAppointmentComponent from './NoShowAppointment'
import BookedOnClass from './BookedOntoClass'
import CancelAClassBooking from './CancelAClassBooking'
import ClassRescheduled from './ClassRescheduled'
import ReminderForClass from './ReminderForClass'
import ClassWaitList from './ClassWaitList'
import Referral from './Referral'
import Invoices from './Invoices'
import LeadResponses from './LeadResponses'
import GiftVoucher from './GiftVoucher'
import MissedAClassComponent from './MissedAClass'
import ConnectRegistration from './ConnectRegistration'
import MedicalForm from './MedicalForm'
import ClassesSpotAvailable from './ClassesSpotAvailable'
import RequestFeedBacks from './RequestFeedBack'
import NewAppoinmentsIsBooked from './NewAppointmentIsBooked'
import UpComingAppointmentReminder from './UpComingAppoinmentReminder'

export default {
  component: EmailSMSPreview,
  title: 'Notification/EmailSMSPreview',
  args: {
    greeting: 'Hi, Anna',
    subtitle: 'Sorry you missed your appointment!',
    message:
      "We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn't show up.",
    contactNumber: '+44 000 987 507',
    footerContact: false,
    footerIconGroup: true,
    footerText:
      'Looking forward to hearing from you soon,<br/> Your friends at The Clinic',
    isFooterText: false,
    smsGreeting: 'Hi Anna, sorry you missed your appointment!',
    smsMessage:
      'We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn\'t show up. Please get back in touch on <span style="color: #00A1E1;">+44 000 987 507</span> to reschedule',
    smsFooterText:
      'Looking forward to hearing from you soon, Your friends at The Clinic',
  },
  argTypes: {
    greeting: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    message: { control: { type: 'text' } },
    contactNumber: { control: { type: 'text' } },
    footerContact: { control: { type: 'boolean' } },
    footerIconGroup: { control: { type: 'boolean' } },
    smsGreeting: { control: { type: 'text' } },
    smsMessage: { control: { type: 'text' } },
    smsFooterText: { control: { type: 'text' } },
  },
}

const NoShowAppointmentStory = ({
  greeting,
  subtitle,
  footerContact,
  footerIconGroup,
  footerText,
  message,
  contactNumber,
  isFooterText,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & NoShowAppointmentProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    subtitle={subtitle}
    footerContact={footerContact}
    footerIconGroup={footerIconGroup}
    footerText={footerText}
    isFooterText={isFooterText}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <NoShowAppointmentComponent
      message={message}
      contactNumber={contactNumber}
      footerContact={footerContact}
      isFooterText={isFooterText}
    />
  </EmailSMSPreview>
)

export const NoShowAppointment = NoShowAppointmentStory.bind({})
export const NoShowAppointment1 = NoShowAppointmentStory.bind({})

NoShowAppointment1.args = {
  greeting: 'Hi, Anna',
  subtitle: 'Sorry you missed your appointment!',
  message:
    "We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn't show up.",
  contactNumber: '+44 000 987 507',
  footerContact: true,
  footerIconGroup: true,
  footerText:
    'Looking forward to hearing from you soon,<br/>Your friends at The Clinic',
  isFooterText: true,
  smsGreeting: 'Hi Anna, sorry you missed your appointment!',
  smsMessage:
    'We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn\'t show up. Please get back in touch on <span style="color: #00A1E1;">+44 000 987 507</span> to reschedule',
  smsFooterText:
    'Looking forward to hearing from you soon,<br/> Your friends at The Clinic',
}

const BookedOnClassStory = ({
  greeting,
  subtitle,
  footerContact,
  footerIconGroup,
  footerText,
  isFooterText,
  smsGreeting,
  smsMessage,
  smsFooterText,
  dateTime,
  consultationDetail,
  consultancyName,
  address,
  message,
}: PropsWithChildren<EmailSMSPreviewProps & BookedOntoClassProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    subtitle={subtitle}
    footerContact={footerContact}
    footerIconGroup={footerIconGroup}
    footerText={footerText}
    isFooterText={isFooterText}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <BookedOnClass
      dateTime={dateTime}
      consultancyName={consultancyName}
      consultationDetail={consultationDetail}
      address={address}
      message={message}
      buttonColor={buttonColor}
    />
  </EmailSMSPreview>
)
export const BookedOntoClass = BookedOnClassStory.bind({})
BookedOntoClass.args = {
  greeting: 'Hi Kristy, see you soon!',
  subtitle: '',
  dateTime: 'Monday, 16 November at 11:00',
  consultationDetail: 'Consultation (30mins) with John Smith',
  consultancyName: 'M-A Hair Dressing & Spa',
  address: '574 Beverly Road, H3454, England, GB',
  message: 'We look forward to seeing you then!',
  smsText:
    'Your class appointment details: Monday, 16 November at 11:00; Consultation (30mins) with John Smith. We look forward to seeing you then',
  footerText: 'Kind regards, Your friends at The Clinic',
  footerIconGroup: true,
  smsGreeting: 'Hi Kristy, see you soon!',
  smsMessage:
    ' <div>Your class appointment details:</div><div> Monday, 16 November at 11:00;</div><div> Consultation (30mins) with John Smith.</div><div> We look forward to seeing you then.</div>',
  smsFooterText:
    '<div>Kind regards,</div><div>Your friends at The Clinic</div>',
}

const cancelledAClassBookingStory = ({
  greeting,
  text,
  footerIconGroup,
  dateTime,
  consultationDetail,
  consultancyName,
  address,
  message,
  smsGreeting,
  smsMessage,
  smsFooterText,
  buttonColor = '',
}: PropsWithChildren<EmailSMSPreviewProps & CancelAClassBookingProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <CancelAClassBooking
      dateTime={dateTime}
      text={text}
      consultancyName={consultancyName}
      consultationDetail={consultationDetail}
      address={address}
      message={message}
      buttonColor={buttonColor}
    />
  </EmailSMSPreview>
)

export const cancelledAClassBooking = cancelledAClassBookingStory.bind({})
export const cancelledAClassBooking1 = cancelledAClassBookingStory.bind({})
cancelledAClassBooking.args = {
  greeting: 'Hi Maria,',
  text: 'Your appointment is now cancelled!',
  dateTime: 'Monday, 16 November at 11:00',
  consultationDetail: 'Consultation (30mins) with John Smith',
  consultancyName: 'M-A Hair Dressing & Spa',
  address: '574 Beverly Road, H3454, England, GB',
  message: 'We would love to see you again in the near future! ',
  footerIconGroup: true,
  footer: true,
  smsGreeting: 'Hi Kristy!',
  smsMessage:
    'We have cancelled your appointment for Monday, 16 November at 11:00. We hope to see you again soon!',
  smsFooterText:
    '<div>Kind regards,</div><div>Your friends at The Clinic</div>',
}

cancelledAClassBooking1.args = {
  greeting: 'Hi Maria,',
  text: 'Your appointment is now cancelled!',
  dateTime: 'Monday, 16 November at 11:00',
  consultationDetail: 'Consultation (30mins) with John Smith',
  consultancyName: 'M-A Hair Dressing & Spa',
  address: '',
  message: 'We would love to see you again in the near future! ',
  footerIconGroup: true,
  smsGreeting: 'Hi Kristy!',
  smsMessage:
    'We have cancelled your appointment for Monday, 16 November at 11:00. We hope to see you again soon!',
  smsFooterText:
    '<div>Kind regards,</div><div>Your friends at The Clinic</div>',
}
const missedAClassStory = ({
  greeting,
  subtitle,
  footerContact,
  footerIconGroup,
  footerText,
  message,
  contactNumber,
  isFooterText,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & NoShowAppointmentProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    subtitle={subtitle}
    footerContact={footerContact}
    footerIconGroup={footerIconGroup}
    footerText={footerText}
    isFooterText={isFooterText}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <MissedAClassComponent
      message={message}
      contactNumber={contactNumber}
      footerContact={footerContact}
      isFooterText={isFooterText}
    />
  </EmailSMSPreview>
)
export const missedAClass = missedAClassStory.bind({})
missedAClass.args = {
  greeting: 'Hi, Anna',
  subtitle: 'Sorry you missed your appointment!',
  message:
    "We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn't show up.",
  contactNumber: '+44 000 987 507',
  footerContact: false,
  footerIconGroup: true,
  footerText:
    'Looking forward to hearing from you soon,<br/> Your friends at The Clinic',
  isFooterText: false,
  smsGreeting: 'Hi Anna, sorry you missed your appointment!',
  smsMessage:
    'We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn\'t show up. Please get back in touch on <span style="color: #00A1E1;">+44 000 987 507</span> to reschedule',
  smsFooterText:
    'Looking forward to hearing from you soon,<br/> Your friends at The Clinic',
}
export const missedAClass1 = missedAClassStory.bind({})
missedAClass1.args = {
  greeting: 'Hi, Anna',
  subtitle: 'Sorry you missed your appointment!',
  message:
    "We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn't show up.",
  contactNumber: '+44 000 987 507',
  footerContact: true,
  footerIconGroup: true,
  footerText:
    'Looking forward to hearing from you soon,<br/>Your friends at The Clinic',
  isFooterText: true,
  smsGreeting: 'Hi Anna, sorry you missed your appointment!',
  smsMessage:
    'We hope everything is okay with you. We had you scheduled to see Dr. Christine today at 11:00 but unfortunately, you didn\'t show up. Please get back in touch on <span style="color: #00A1E1;">+44 000 987 507</span> to reschedule',
  smsFooterText:
    'Looking forward to hearing from you soon,<br/> Your friends at The Clinic',
}

const classRescheduledStory = ({
  greeting,
  subtitle,
  message,
  footerText,
  footerContact,
  footerIconGroup,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ClassRescheduledProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    subtitle={subtitle}
    footerContact={footerContact}
    footerIconGroup={footerIconGroup}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <ClassRescheduled message={message} footerText={footerText} />
  </EmailSMSPreview>
)

export const ClassReschedule = classRescheduledStory.bind({})
export const ClassReschedule1 = classRescheduledStory.bind({})
ClassReschedule.args = {
  greeting: 'Hi Anna,',
  subtitle: 'We have rescheduled your appointment!',
  message:
    'This is a confirmation to let you now we rescheduled your Consultation (30mins) appointment from Monday, 16 November at 11:00 to Friday, 20 November at 11:00.',
  footerText: 'Kind regards, Your friends at The Clinic',
  footerContact: true,
  footerIconGroup: true,
  smsGreeting: 'Hi Anna',
  smsMessage:
    'This is a confirmation to let you now we rescheduled your Consultation (30mins) appointment from Monday, 16 November at 11:00 to Friday, 20 November at 11:00.',
  smsFooterText: ' We look forward to seeing you then!',
}

ClassReschedule1.args = {
  greeting: 'Hi Anna,',
  subtitle: 'We have rescheduled your appointment!',
  message:
    'This is a confirmation to let you now we rescheduled your Consultation (30mins) appointment from Monday, 16 November at 11:00 to Friday, 20 November at 11:00.',
  footerText: 'Kind regards, Your friends at The Clinic',
  footerContact: true,
  footerIconGroup: true,
  smsGreeting: 'Hi Anna',
  smsMessage:
    'This is a confirmation to let you now we rescheduled your Consultation (30mins) appointment from Monday, 16 November at 11:00 to Friday, 20 November at 11:00.',
  smsFooterText: ' We look forward to seeing you then!',
}

const ReminderForClassStory = ({
  greeting,
  message,
  footerIconGroup,
  contactNumber,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ReminderForClassProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <ReminderForClass message={message} contactNumber={contactNumber} />
  </EmailSMSPreview>
)

export const ReminderForClasses = ReminderForClassStory.bind({})
ReminderForClasses.args = {
  greeting: 'Hi Anna,',
  message:
    'This is a friendly reminder that we have you scheduled for Botox 1 area on Monday, 16 November at 11:00. You can find us at 574 Beverly Road, H3454, England, GB.',
  footerIconGroup: true,
  contactNumber: '+44 000 987 507',
  smsGreeting: 'Hi Anna!',
  smsMessage:
    'This is a friendly reminder that we have you scheduled for Botox 1 area on Monday, 16 November at 11:00.',
  smsFooterText: 'See you soon!',
}

const ClassWaitListStory = ({
  greeting,
  message,
  footerIconGroup,
  footerContact,
  footerText,
  isFooterText,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ClassRescheduledProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    footerContact={footerContact}
    footerText={footerText}
    isFooterText={isFooterText}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <ClassWaitList message={message} />
  </EmailSMSPreview>
)

export const ClassWaitLists = ClassWaitListStory.bind({})
ClassWaitLists.args = {
  greeting: 'Dear Sophia,',
  message:
    'Good news! You recently were placed in our waitlist and a new class is now available. If you would still like to book your appointment, you must take action before the spot is taken.',
  footerIconGroup: true,
  footerContact: true,
  footerText:
    'Looking forward to hearing from you soon,<br/>Your friends at The Clinic',
  isFooterText: true,
  smsGreeting: 'Good news!',
  smsMessage:
    'You recently were placed in our waitlist and a new class is now available. If you would still like to book your appointment please get in touch via Phone or Email: ',
  smsFooterText:
    '<div><span style="color: #00A1E1;">+44 000 987 507</span></div><div><span style="color: #00A1E1;">info@theclinic.com</span></div>',
}

const ClassesSpotAvailableStory = ({
  greeting,
  message,
  footerIconGroup,
  footerContact,
  footerText,
  isFooterText,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ClassRescheduledProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    footerContact={footerContact}
    footerText={footerText}
    isFooterText={isFooterText}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <ClassesSpotAvailable message={message} />
  </EmailSMSPreview>
)

export const ClassSpotAvailable = ClassesSpotAvailableStory.bind({})
ClassSpotAvailable.args = {
  greeting: 'Dear Sophia,',
  message:
    'Good news! You recently were placed in our waitlist and a new class is now available. If you would still like to book your appointment, you must take action before the spot is taken.',
  footerIconGroup: true,
  footerContact: true,
  footerText:
    'Looking forward to hearing from you soon,<br/>Your friends at The Clinic',
  isFooterText: true,
  smsGreeting: 'Good news!',
  smsMessage:
    'You recently were placed in our waitlist and a new class is now available. If you would still like to book your appointment please get in touch via Phone or Email: ',
  smsFooterText:
    '<div><span style="color: #00A1E1;">+44 000 987 507</span></div><div><span style="color: #00A1E1;">info@theclinic.com</span></div>',
}

const ReferralStory = ({
  greeting,
  message,
  footerIconGroup,
  footerText,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ReminderForClassProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <Referral message={message} footerText={footerText} />
  </EmailSMSPreview>
)

export const Referrals = ReferralStory.bind({})
Referrals.args = {
  greeting: 'Dear Sophia,',
  message:
    'We would like to say thank you for your client referral. It means the world to us!',
  footerIconGroup: true,
  footerText:
    'We look forward to seeing you soon!<br/> Your friends at The Clinic',
  smsGreeting: 'Hi Sophia!',
  smsMessage:
    '<div>Thank you for your client referral. It means the world to us! </div><div>As a loyal client, we would like to offer you [REWARD] OFF for your next visit. Please find your voucher code below.</div>',
  smsFooterText: '<div><span style="color: #00A1E1;">VOUCHER_CODE</span></div>',
}

const InvoicesStory = ({
  greeting,
  message,
  footerIconGroup,
  footerText,
  smsGreeting,
  smsMessage,
}: PropsWithChildren<EmailSMSPreviewProps & ReminderForClassProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    smsMessage={smsMessage}
    smsGreeting={smsGreeting}
  >
    <Invoices message={message} footerText={footerText} />
  </EmailSMSPreview>
)

export const Invoice = InvoicesStory.bind({})
Invoice.args = {
  greeting: 'Dear Sophia,',
  message: 'Thank you for your recent visit at M-A Hair Dressing & Spa.',
  footerIconGroup: true,
  footerContact: false,
  footerText:
    'Looking forward to hearing from you soon,<br/>Your friends at The Clinic',
  smsGreeting: 'Dear Sophia!',
  smsMessage:
    'Thank you for your recent visit - please find below your invoice: <br/><br/> <a href="https:pabau.me/kd29">https:pabau.me/kd29</a>',
}

const LeadResponsesStory = ({
  greeting,
  message,
  footerIconGroup,
  footerText,
  footerContact,
  isFooterText,
  text,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & LeadResponsesProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    footerContact={footerContact}
    footerText={footerText}
    isFooterText={isFooterText}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
  >
    <LeadResponses
      message={message}
      text={text}
      footerIconGroup={footerIconGroup}
      footerContact={footerContact}
      isFooterText={isFooterText}
    />
  </EmailSMSPreview>
)

export const LeadResponse = LeadResponsesStory.bind({})
export const LeadResponse1 = LeadResponsesStory.bind({})
LeadResponse.args = {
  greeting: 'Hi Anna,',
  message:
    'Thank you for your inquiry! We received your form and we will get back to you as soon as possible.',
  footerIconGroup: true,
  text: 'Kind regards,<br/> Your friends at The Clinic',
  footerText: 'Kind regards,<br/> Your friends at The Clinic',
  footerContact: true,
  isFooterText: false,
  smsGreeting: 'Hi Anna! ',
  smsMessage:
    '<div>Thank you for your inquiry!</div><div>We received your form and we will get back to you as soon as possible.</div>',
  smsFooterText:
    '<div>Kind regards,</div><div>Your friends at The Clinic</div>',
}

LeadResponse1.args = {
  greeting: 'Hi Anna,',
  message:
    'Thank you for your inquiry! We received your form and we will get back to you as soon as possible.',
  footerIconGroup: true,
  text: 'Kind regards,<br/> Your friends at The Clinic',
  footerText: 'Kind regards <br/> Your friends at The Clinic',
  footerContact: false,
  isFooterText: true,
  smsGreeting: 'Hi Anna! ',
  smsMessage:
    '<div>Thank you for your inquiry!</div><div>We received your form and we will get back to you as soon as possible.</div>',
  smsFooterText:
    '<div>Kind regards,</div><div>Your friends at The Clinic</div>',
}

const GiftVoucherStory = ({
  value,
  voucherCode,
  expiry,
  consultancyName,
  greeting,
  footerIconGroup,
  isGiftVoucher,
  footer,
}: PropsWithChildren<EmailSMSPreviewProps & GiftVoucherProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    isGiftVoucher={isGiftVoucher}
    footer={footer}
  >
    <GiftVoucher
      value={value}
      voucherCode={voucherCode}
      expiry={expiry}
      consultancyName={consultancyName}
    />
  </EmailSMSPreview>
)

export const GiftVouchers = GiftVoucherStory.bind({})
GiftVouchers.args = {
  greeting: 'Congratulations Sophia,you have received a Gift Voucher ',
  value: 'Lorem ipsum',
  voucherCode: 'Lorem ipsum',
  expiry: 'Lorem ipsum',
  consultancyName: 'M-A Hair Dressing & Spa',
  footerIconGroup: false,
  isGiftVoucher: true,
  footer: false,
}

const ConnectRegistrationStory = ({
  greeting,
  message,
  username,
  password,
  connectURL,
  text,
  footerContact,
  footerIconGroup,
  footerText,
  isFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ConnectRegistrationProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    footerContact={footerContact}
    footerText={footerText}
    isFooterText={isFooterText}
  >
    <ConnectRegistration
      username={username}
      password={password}
      connectURL={connectURL}
      message={message}
      text={text}
      footerContact={footerContact}
    />
  </EmailSMSPreview>
)

export const ConnectRegistrations = ConnectRegistrationStory.bind({})
export const ConnectRegistrations1 = ConnectRegistrationStory.bind({})
ConnectRegistrations.args = {
  greeting: 'Account created',
  message:
    'Congratulations Sophia, your account has been successfully created. Follow this link to access your online account:',
  username: 'Sophia17',
  password: 'Sophia0193091',
  connectURL: 'URL://CONNECTURL',
  text: 'Kind regards,<br/> Your friends at The Clinic',
  footerIconGroup: true,
  footerContact: true,
  isFooterText: false,
  footerText: 'Kind regards,<br/> Your friends at The Clinic',
}

ConnectRegistrations1.args = {
  greeting: 'Account created',
  message:
    'Congratulations Sophia, your account has been successfully created. Follow this link to access your online account:',
  username: 'Sophia17',
  password: 'Sophia0193091',
  connectURL: 'URL://CONNECTURL',
  text: 'Kind regards,<br/> Your friends at The Clinic',
  footerIconGroup: true,
  footerContact: false,
  isFooterText: true,
  footerText: 'Kind regards,<br/> Your friends at The Clinic',
}

const MedicalFormStory = ({
  greeting,
  footerIconGroup,
  footerText,
  isFooterText,
  contactNumber,
  message,
}: PropsWithChildren<EmailSMSPreviewProps & MedicalFormProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    footerText={footerText}
    isFooterText={isFooterText}
  >
    <MedicalForm contactNumber={contactNumber} message={message} />
  </EmailSMSPreview>
)

export const MedicalForms = MedicalFormStory.bind({})
MedicalForms.args = {
  greeting: 'Dear Sophia,',
  message:
    'Please find attached your medical form in PDF format. If you have any questions do not hesitate to contact us at',
  contactNumber: '+44 000 987 507',
  footerIconGroup: true,
  footerText: 'Kind regards,<br/> Your friends at The Clinic',
  isFooterText: true,
}

const RequestFeedBackStory = ({
  greeting,
  message,
  footerIconGroup,
}: PropsWithChildren<EmailSMSPreviewProps & ClassRescheduledProps>) => (
  <EmailSMSPreview greeting={greeting} footerIconGroup={footerIconGroup}>
    <RequestFeedBacks message={message} />
  </EmailSMSPreview>
)

export const RequestFeedBack = RequestFeedBackStory.bind({})
RequestFeedBack.args = {
  greeting: 'Hi Anna,',
  message:
    'Thank you for visiting The Clinic, we hope you were happy with our services!',
  footerIconGroup: true,
}

const NewAppoinmentsIsBookedStory = ({
  smsGreeting,
  smsMessage,
  smsFooterText,
  footer,
  hideLogo,
}: PropsWithChildren<EmailSMSPreviewProps>) => (
  <EmailSMSPreview
    footer={footer}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
    hideLogo={hideLogo}
  >
    <NewAppoinmentsIsBooked />
  </EmailSMSPreview>
)

export const NewAppoinmentsBooked = NewAppoinmentsIsBookedStory.bind({})
NewAppoinmentsBooked.args = {
  footer: false,
  smsFooterText: 'We look forward to seeing you!',
  smsGreeting: 'Hi Sophia!',
  smsMessage:
    "This is a confirmation of your appointment at Meri's Skincare on Monday, 16 November at 11:00.",
  hideLogo: true,
}

const UpcomingAppointmentReminderStory = ({
  greeting,
  message,
  footerIconGroup,
  contactNumber,
  smsGreeting,
  smsMessage,
  smsFooterText,
}: PropsWithChildren<EmailSMSPreviewProps & ReminderForClassProps>) => (
  <EmailSMSPreview
    greeting={greeting}
    footerIconGroup={footerIconGroup}
    smsGreeting={smsGreeting}
    smsMessage={smsMessage}
    smsFooterText={smsFooterText}
    hideLogo={hideLogo}
  >
    <UpComingAppointmentReminder
      message={message}
      contactNumber={contactNumber}
    />
  </EmailSMSPreview>
)

export const UpComingAppointmentReminders = UpcomingAppointmentReminderStory.bind(
  {}
)
UpComingAppointmentReminders.args = {
  greeting: 'Hi Anna,',
  message:
    'This is a friendly reminder that we have you scheduled for Botox 1 area on Monday, 16 November at 11:00.\n You can find us at 574 Beverly Road, H3454, England, GB.',
  footerIconGroup: true,
  contactNumber: '+44 000 987 507',
  smsGreeting: 'Hi Sophia!',
  smsMessage:
    'This is a friendly reminder that we have you scheduled for Botox 1 area on Monday, 16 November at 11:00.',
  smsFooterText: 'See you soon!',
}
