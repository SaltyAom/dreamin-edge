export type Dreamin = {
    subMenu: null
    name: {
        th: string
        en: string
        jp: string
    }
    price: number
} | {
    subMenu: string[]
    name: null
    price: number
}

export interface DreaminState {
    dreamin: Dreamin[]
}

export interface DreaminEvent {
    'UPDATE_MENU': Dreamin[]
}
