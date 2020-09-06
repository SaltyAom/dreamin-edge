import { h, Fragment } from 'preact'
import { useMemo, useEffect, useState, useCallback, useRef } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'

import Card from '../component/card'

import filterSearch from '../libs/filterSearch'
import applySort from '../libs/applySort'

import { DreaminStore, DreaminEvent } from '../store/dreamin/types'
import { SortStore, SortEvent } from '../store/sort/types'
import { SearchStore, SearchEvent } from '../store/search/types'

import '../styles/menu-list.styl'

const initialDisplayMenu = 20

const Index = () => {
    let { search } = useStoreon<SearchStore, SearchEvent>('search'),
        { sort } = useStoreon<SortStore, SortEvent>('sort'),
        { dreamin } = useStoreon<DreaminStore, DreaminEvent>('dreamin')

    let [totalDisplayMenu, updateTotalDisplayMenu] = useState(
        initialDisplayMenu
    )

    // Reference to remove event listener
    let previousLazyload = useRef<() => void>(null)

    let menuList = useMemo(
        () => applySort(filterSearch(dreamin, search), sort),
        [dreamin, search]
    )

    let lazyLoadMenu = useCallback(() => {
        let pageHeight = window.innerHeight

        if (
            totalDisplayMenu > menuList.length ||
            document.body.scrollHeight >= window.pageYOffset + pageHeight * 1.75
        )
            return

        updateTotalDisplayMenu(totalDisplayMenu + 20)
    }, [totalDisplayMenu, menuList])

    useEffect(() => {
        updateTotalDisplayMenu(initialDisplayMenu)
    }, [search])

    useEffect(() => {
        if (previousLazyload.current)
            document.removeEventListener('scroll', previousLazyload.current)

        if (totalDisplayMenu < menuList.length)
            document.addEventListener('scroll', lazyLoadMenu, {
                passive: true
            })

        previousLazyload.current = lazyLoadMenu
    }, [totalDisplayMenu, menuList])

    if (!dreamin.length)
        return (
            <Fragment>
                <ul id="menu-list">
                    {Array(20)
                        .fill(null)
                        .map((_, index) => (
                            <Card key={index} index={index} preload />
                        ))}
                </ul>
            </Fragment>
        )

    if (!menuList.length)
        return (
            <ul id="menu-list">
                <li id="menu-fetch">
                    <img
                        class="illust"
                        src="/assets/illustrations/not_found.svg"
                        alt="Not found"
                    />
                    <h1 class="title">Not Found</h1>
                    <p class="detail">Maybe try other keyword?</p>
                </li>
            </ul>
        )

    return (
        <ul id="menu-list">
            {menuList.map(({ name, subMenu, price }, index) => {
                if (index >= totalDisplayMenu) return null

                return (
                    <Card
                        key={
                            typeof name === 'undefined'
                                ? subMenu[0]
                                : `${name.th}-${name.jp}-${price}`
                        }
                        name={
                            typeof name === 'undefined'
                                ? subMenu
                                : [name.th, name.en, name.jp]
                        }
                        price={price}
                        index={index}
                    />
                )
            })}
        </ul>
    )
}

export default Index
