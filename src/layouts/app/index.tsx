import { h, Fragment } from 'preact'

import Search from '../../component/search'
import Sort from '../../component/sort'
import Snackbar from '../../component/snackbar'

import AppLayoutComponent from './types'

const AppLayout: AppLayoutComponent = ({
    children,
    withSort = false,
    withSearch = false
}) => (
    <Fragment>
        <Search withSearch={withSearch} />
        {withSort ? <Sort /> : <Fragment></Fragment>}
        <Snackbar />
        {children}
    </Fragment>
)

export default AppLayout
