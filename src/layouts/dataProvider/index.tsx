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
                    console.log('A', dreamin)
                    dispatch('UPDATE_MENU', dreamin)
                })
                .catch((err) => {
                    console.log(err)
                    setTimeout(getAPI, 5000)
                })
        }

        getAPI()
    }, [])

    return children
}

export default StoreLayout
