type UserRole = "public" | "admin"

interface Hasura {
  "x-hasura-allowed-roles"?: UserRole[];
  "x-hasura-default-role": UserRole;
  "x-hasura-user-id"?: number | string;
  "x-hasura-org-id": number | string;
  //TODO refactor
  "x-hasura-james"?: number | string;

}

export interface JwtPayloadDto {
  username: number;
  company: number;
  "https://hasura.io/jwt/claims": Hasura
}
