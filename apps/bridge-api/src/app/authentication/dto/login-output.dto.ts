export interface LoginOutputDto {
  user: UserOutput;
  company: CompanyOutput;
}

interface UserOutput {
  user_id: number;
  username: string;
}

interface CompanyOutput {
  company_id: number;
  language: string;
}
