import { useEffect } from 'preact/hooks'

import api from '../../libs/api'

import { useStoreon } from 'storeon/preact'

import StoreLayoutComponent from './types'

const StoreLayout: StoreLayoutComponent = ({ children }) => {
    const { dispatch } = useStoreon()

    useEffect(() => {
        let getAPI = () =>
            api(
                'getMenu',
                'https://apollo-search-maidreamin.now.sh',
                `
                    query getMenu {
                        getMenu {
                            name {
                                th
                                en
                                jp
                            }
                            subMenu
                            price
                        }
                    }
                `
            )
                .then((dreamin) => {
                    dispatch('UPDATE_MENU', dreamin)
                })
                .catch(() => setTimeout(getAPI, 5000))

        getAPI()
    }, [])

    return children
}

export default StoreLayout
