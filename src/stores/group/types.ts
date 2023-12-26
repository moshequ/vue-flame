import { Timestamp } from 'firebase/firestore'

export interface IGroupDetails {
  name?: string
  email?: string
  address?: string
  phone?: string
  birthdate?: string
  identification?: string
  [key: string]: string | undefined
}
export interface IGroupSkills {
  [key: string]: string
}
export interface IGroupEquipment {
  [key: string]: string
}

export interface INewGroup {
  id?: string
  name: string
  description?: string
  // set defaults for member profiles
  defaultDetails?: IGroupDetails
  defaultSkills?: IGroupSkills
  defaultEquipment?: IGroupEquipment
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export interface IGroup extends INewGroup {
  id: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export type TGroups = Record<string, IGroup>

export interface IState {
  loading: boolean
  list: IGroup[]
  errorCode: string
  errorMsg: string
}

export interface Getters {
  item: () => IGroup
  byId: (state: IState) => TGroups
}

export interface Actions {
  fetch(): Promise<IGroup[]>
  upsert(payload: INewGroup): Promise<IGroup>
  remove(payload: IGroup): Promise<IGroup>
}
