export type SortBy = "index" | "price"
export type SortOrder = "asc" | "desc"

export interface Sort {
    by: SortBy
    order: SortOrder
}

export interface SortStore {
    sort: Sort
}

export interface SortEvent {
    "UPDATE_SORT_BY": SortBy
    "UPDATE_SORT_ORDER": SortOrder
}