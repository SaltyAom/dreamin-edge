import { Fragment } from "preact"

import Search from "../../component/search"
import Sort from "../../component/sort"
import Snackbar from "../../component/snackbar"

const AppLayout = ({
    children,
    updateSearch = () => null,
    sort = null,
    updateSort = () => null
}) => (
    <Fragment>
        <Search {...{ updateSearch }} />
        {sort !== null ? <Sort {...{ sort, updateSort }} /> : null}
        <Snackbar />
        {children}
    </Fragment>
)

export default AppLayout
