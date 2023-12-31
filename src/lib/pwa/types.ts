export interface IOptionsDefaults {}

type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

export type IOptions = DeepPartial<IOptionsDefaults>
