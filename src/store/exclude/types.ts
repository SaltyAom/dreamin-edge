export interface ExcludeStore {
    exclude: number[]
}

export interface ExcludeEvent {
    TOGGLE_EXCLUDE: number
    REARRANGE_EXCLUDE_FROM: number
}
