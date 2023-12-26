import { Timestamp } from 'firebase/firestore'

export interface INewCycle {
  id?: string
  groupId: string
  start: Timestamp
  end: Timestamp
  tasks: {
    title: string
    slots: { name: string; memberId: string }[]
    datetime: { start: Timestamp; end: Timestamp }
  }[]
  createdAt?: Timestamp
  updatedAt?: Timestamp
}

export interface ICycle extends INewCycle {
  id: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export type TCycles = Record<string, ICycle>
export type TCyclesList = Record<string, ICycle[]>

export interface IState {
  loading: boolean
  list: ICycle[]
  form?: INewCycle
  errorCode: string
  errorMsg: string
}

export interface Getters {
  byGroupId: (state: IState) => TCyclesList
  byId: (state: IState) => TCycles
}

export interface Actions {
  fetch(): Promise<ICycle[]>
  upsert(payload: INewCycle): Promise<ICycle>
  remove(payload: ICycle): Promise<ICycle>
}
