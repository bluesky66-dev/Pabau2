export interface User {
  id: number,
  hash: string,
  salt: string,
  admin: boolean | number,
  email: string,
  image: string,
  super: boolean | number,
  is_hcp: boolean,
  locale: string,
  address: string,
  company: number,
  created: Date,
  deleted: boolean,
  can_rota: boolean,
  can_void: boolean,
  division: string,
  imported: boolean,
  language: string,
  location: string,
  passcode: string,
  password: string,
  position: string,
  restored: boolean,
  timezone: string,
  username: string,
  can_merge: boolean,
  custom_id: string,
  full_name: string,
  job_title: string,
  pass_code: string,
  signature: string,
  can_refund: boolean,
  can_report: boolean,
  clocked_in: string,
  department: string,
  last_login: Date,
  user_color: string,
  admin_leads: boolean,
  admin_tasks: boolean,
  all_reports: boolean,
  clocked_out: Date,
  all_services: boolean | number,
  can_discount: boolean | number,
  default_page: string,
  limited_user: boolean | number
  main_contact: boolean,
  phone_number: string,
  detailed_view: boolean | number
  hide_calendar: boolean | number
  appear_on_rota: boolean | number,
  calendar_order: boolean | number
  force_password: boolean | number
  login_disabled: boolean | number
  password_algor: boolean | number,
  staff_read_only: boolean | number
  stock_read_only: boolean | number
  can_lab_requests: boolean,
  can_patient_docs: boolean | number,
  can_see_personal: boolean | number,
  delete_treatment: boolean | number
  disable_tutorial: boolean | number
  last_loaded_page: string,
  login_fail_count: boolean | number
  can_make_blockout: boolean | number,
  can_move_blockout: boolean | number,
  can_view_full_cal: boolean,
  notify_on_booking: boolean,
  performance_stats: boolean | number
  can_cancel_booking: boolean | number,
  can_patient_photos: boolean | number,
  can_patient_recall: boolean | number,
  google_auth_secret: string,
  temporary_password: boolean,
  can_delete_blockout: boolean | number,
  can_discount_single: boolean,
  can_patient_appoint: boolean | number,
  can_patient_loyalty: boolean | number,
  default_contract_id: boolean | number
  last_password_reset: boolean | number
  can_patient_consents: boolean | number,
  can_patient_packages: boolean | number,
  hide_online_bookings: boolean | number
  permission_last_role: string,
  can_edit_booking_time: boolean | number,
  can_patient_fiancials: boolean | number,
  can_patient_treatments: boolean | number,
  can_edit_communications: boolean,
  can_patient_giftvoucher: boolean | number,
  can_patient_memberships: boolean | number,
  can_patient_prescription: boolean | number,
  disable_multiple_clinics: boolean | number
  can_delete_communications: boolean,
  can_patient_communicatons: boolean | number,
  can_patient_medical_history: boolean | number
}
