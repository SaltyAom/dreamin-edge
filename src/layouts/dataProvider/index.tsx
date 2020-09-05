import { useEffect } from 'preact/hooks'

import { useStoreon } from 'storeon/preact'

import StoreLayoutComponent from './types'

const StoreLayout: StoreLayoutComponent = ({ children }) => {
    const { dispatch } = useStoreon()

    useEffect(() => {
        let getAPI = () => {
            fetch('https://dreamin-edge-api.now.sh/menu')
                .then((res) => res.json())
                .then((dreamin) => {
                    if (localStorage) {
                        let cached = localStorage.getItem('menu')

                        if (cached === JSON.stringify(dreamin)) return
                    }

                    dispatch('UPDATE_MENU', dreamin)

                    localStorage.setItem('menu', JSON.stringify(dreamin))
                })
                .catch(() => {
                    setTimeout(getAPI, 5000)
                })
        }

        if (localStorage) {
            let cached = localStorage.getItem('menu')

            if (cached) dispatch('UPDATE_MENU', JSON.parse(cached))
        }

        getAPI()
    }, [])

    return children
}

export default StoreLayout
