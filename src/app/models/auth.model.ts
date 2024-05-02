export interface ISignInModel {
  username: string
  password: string
}

export interface ITokenResponse {
  message: string
  token: string
  username: string
}
