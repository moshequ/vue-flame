import type { StoreDefinition } from 'pinia'
import { defineStore } from 'pinia'
import { FirebaseError } from '@firebase/util'
import { setError } from './utils/setError'
import type { Actions, IState, Getters, ICycle, TCycles, TCyclesList } from './types'
import { getTimestamps } from '@/stores/utils/getTimestamps'
import { fetchDocs, removeDoc, upsertDoc } from '@/stores/utils/upsertDoc'
import { Timestamp } from 'firebase/firestore'

const storeName = 'cycle'

type TItem = ICycle
type TItems = TCycles
type TItemsList = TCyclesList

const useStore: StoreDefinition<typeof storeName, IState, Getters, Actions> = defineStore(
  storeName,
  {
    state() {
      return {
        loading: true,
        list: [],
        form: undefined,
        errorCode: '',
        errorMsg: ''
      } as IState
    },
    getters: {
      byGroupId: (state: IState) => {
        return state.list.reduce((acc, item) => {
          acc[item.groupId] = acc[item.groupId] || []
          acc[item.groupId].push(item)

          return acc
        }, {} as TItemsList)
      },
      byId: (state: IState) => {
        return state.list.reduce((acc, item) => ({ ...acc, [item.id]: item }), {} as TItems)
      }
    },
    actions: {
      async fetch() {
        const store = useStore()
        store.loading = true
        setError()

        try {
          store.list = await fetchDocs<TItem>(storeName)
          const data = {
            equipment: [
              { id: 'long_m16', title: 'm16 ארוך' },
              { id: 'shows', title: 'נעליים' }
            ],
            skills: [
              { id: 'license', title: 'רישיון' },
              { id: 'MG', title: 'מאג' }
            ],
            members: [
              {
                id: 'moshe',
                groupId: '1',
                nickname: 'משה ק.',
                skills: { license: true, MG: true },
                equipment: {},
                vacations: [],
                // locations: [{ long: 1, lat: 2, datetime: { start: Timestamp.now(), end: undefined } }]
                away: [{ start: Timestamp.now(), end: undefined }]
              },
              { id: 'igor', groupId: '1', nickname: 'איגור א.', skills: { MG: true } }
            ],
            // today 19.12.2025
            // where groupId = 1 and datetime.start > today and datetime.end < today + 7
            // tasks: [18.12.2025, 19.12.2025]
            cycles: [
              {
                id: '1',
                groupId: 'CjwuFhwleJU9SvUuRiH2',
                start: Timestamp.fromMillis(new Date(2023, 11, 17).getTime()),
                end: Timestamp.fromMillis(new Date(2023, 11, 24).getTime() - 1),
                tasks: [
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 18, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 18, 13))
                    }
                  },
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },

                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '4', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 13)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 19))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 1)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 7))
                    }
                  }
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 1)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 7))
                  //   }
                  // },
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 7)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 14))
                  //   }
                  // }
                ],
                updatedAt: Timestamp.now(),
                createdAt: Timestamp.now()
              },
              {
                id: '2',
                groupId: 'CjwuFhwleJU9SvUuRiH2',
                start: Timestamp.fromMillis(new Date(2023, 11, 17 + 7).getTime()),
                end: Timestamp.fromMillis(new Date(2023, 11, 24 + 7).getTime() - 1000),
                tasks: [
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 18, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 18, 13))
                    }
                  },
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },

                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '4', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 13)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 19))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 1)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 7))
                    }
                  }
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 1)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 7))
                  //   }
                  // },
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 7)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 14))
                  //   }
                  // }
                ],
                updatedAt: Timestamp.now(),
                createdAt: Timestamp.now()
              },
              {
                id: '3',
                groupId: 'CjwuFhwleJU9SvUuRiH2',
                start: Timestamp.fromDate(new Date(2023, 11, 17, 7)),
                end: Timestamp.fromDate(new Date(2023, 11, 23, 13)),
                tasks: [
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 18, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 18, 13))
                    }
                  },
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },

                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '4', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 13)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 19))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 1)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 7))
                    }
                  }
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 1)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 7))
                  //   }
                  // },
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 7)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 14))
                  //   }
                  // }
                ],
                updatedAt: Timestamp.now(),
                createdAt: Timestamp.now()
              },
              {
                id: '4',
                groupId: 'CjwuFhwleJU9SvUuRiH2',
                start: Timestamp.fromDate(new Date(2023, 11, 17, 7)),
                end: Timestamp.fromDate(new Date(2023, 11, 23, 13)),
                tasks: [
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 18, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 18, 13))
                    }
                  },
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '1', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },
                  {
                    title: 'ש.ג.',
                    slots: [{ name: 'שומר', memberId: '4', skills: {} }],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 13)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 19))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 7)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 13))
                    }
                  },
                  {
                    title: 'סיור חפציבה',
                    slots: [
                      { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                      { name: 'מלווה', memberId: '3', skills: { MG: true } }
                    ],
                    datetime: {
                      start: Timestamp.fromDate(new Date(2023, 11, 19, 1)),
                      end: Timestamp.fromDate(new Date(2023, 11, 19, 7))
                    }
                  }
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 1)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 7))
                  //   }
                  // },
                  // {
                  //   title: 'סיור חפציבה',
                  //   slots: [
                  //     { name: 'נהג', memberId: '2', skills: { license: true, MG: true } },
                  //     { name: 'מלווה', memberId: '3', skills: { MG: true } }
                  //   ],
                  //   datetime: {
                  //     start: Timestamp.fromDate(new Date(2023, 11, 20, 7)),
                  //     end: Timestamp.fromDate(new Date(2023, 11, 20, 14))
                  //   }
                  // }
                ],
                updatedAt: Timestamp.now(),
                createdAt: Timestamp.now()
              }
            ]
          }
          store.list = data.cycles
          store.loading = false
          return store.list
        } catch (error: unknown) {
          setError(error as FirebaseError)
          console.error(error)
          store.loading = false
          throw error
        }
      },
      async upsert(payload) {
        const store = useStore()
        store.loading = true
        setError()

        try {
          const ts = getTimestamps(payload)
          const doc = await upsertDoc<TItem>(storeName, { ...payload, ...ts })

          store.list = store.byId[doc.id]
            ? (store.list = store.list.map((item) => (item.id === doc.id ? doc : item)))
            : (store.list = [...store.list, doc])

          store.loading = false
          return doc
        } catch (error: unknown) {
          setError(error as FirebaseError)
          console.error(error)
          store.loading = false
          throw error
        }
      },
      async remove(payload) {
        const store = useStore()
        store.loading = true
        setError()

        try {
          const doc = await removeDoc(storeName, payload)
          store.list = store.list.filter((item) => item.id !== doc.id)
          store.loading = false
          return doc
        } catch (error: unknown) {
          setError(error as FirebaseError)
          console.error(error)
          store.loading = false
          throw error
        }
      }
    }
  }
)

export const useCycleStore = useStore
