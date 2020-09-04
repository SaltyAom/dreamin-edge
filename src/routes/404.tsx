import { h } from 'preact'

import '../styles/404.styl'

const NotFound = () => (
    <main id="not-found">
        <img
            class="illust"
            src="/assets/illustrations/not_found.svg"
            alt="Not Found"
        />
        <h1 class="title">Not found</h1>
        <p class="detail">The page you are looking for could not be found.</p>
    </main>
)

export default NotFound
