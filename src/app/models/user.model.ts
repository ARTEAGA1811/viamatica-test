export interface IUser {
  id: number
  username: string
  email: string
  sessionActive: boolean
  status: string
  person: IPerson
  roles: IRole[]
  sessions: ISession[]
}

export interface IPerson {
  id: number
  names: string
  lastNames: string
  identification: string
  birthDate?: string
}

export interface IRole {
  id: number
  name: string
}

export interface ISession {
  id: number
  loginDate: string
  logoutDate: string
}
