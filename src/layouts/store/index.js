import { useEffect } from "preact/hooks"

import useSwr from "swr"
import fetch from "../../libs/fetch"

import { useStoreon } from "storeon/preact"

const StoreLayout = ({ children }) => {
    let { data: dreamin } = useSwr(
        [
            "https://apollo-search-maidreamin.now.sh",
            "getMenu",
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
        ],
        fetch
    )

    const { dispatch } = useStoreon()

    useEffect(() => {
        dispatch("UPDATE_MENU", typeof dreamin !== "undefined" ? dreamin : {})
    }, [dreamin])

    return children
}

export default StoreLayout
