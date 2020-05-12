import { h, FunctionComponent } from 'preact'
import { useStoreon } from 'storeon/preact'

import Card from '../component/card'

import filterSearch from '../libs/filterSearch'
import applySort from '../libs/applySort'

import { DreaminStore, DreaminEvent } from '../store/dreamin/types'
import { SortStore, SortEvent } from '../store/sort/types'
import { SearchStore, SearchEvent } from '../store/search/types'

import '../styles/menu-list.styl'

const Index: FunctionComponent<{}> = () => {
    const { search } = useStoreon<SearchStore, SearchEvent>('search'),
        { sort } = useStoreon<SortStore, SortEvent>('sort'),
        { dreamin } = useStoreon<DreaminStore, DreaminEvent>('dreamin')

    if (!dreamin.length)
        return (
            <ul id="menu-list">
                <li id="menu-fetch">
                    <img
                        class="illust"
                        src="/assets/illustrations/loading.svg"
                        alt="Loading"
                    />
                    <h2 class="title">Downloading data...</h2>
                    <p class="detail">Thanks for your patient!</p>
                </li>
            </ul>
        )

    const menuList = applySort(filterSearch(dreamin, search), sort)

    if (!menuList.length)
        return (
            <ul id="menu-list">
                <li id="menu-fetch">
                    <img
                        class="illust"
                        src="/assets/illustrations/not_found.svg"
                        alt="NoT found"
                    />
                    <h1 class="title">Not Found</h1>
                    <p class="detail">Maybe try other keyword?</p>
                </li>
            </ul>
        )

    return (
        <ul id="menu-list">
            {menuList.map(({ name, subMenu, price }) => (
                <Card
                    key={
                        name === null
                            ? subMenu[0]
                            : `${name.th}-${name.jp}-${price}`
                    }
                    name={name === null ? subMenu : [name.th, name.en, name.jp]}
                    price={price}
                />
            ))}
        </ul>
    )
}

export default Index
