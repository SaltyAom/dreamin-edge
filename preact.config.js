import { resolve } from 'path'

import CopyWebpackPlugin from 'copy-webpack-plugin'

export default (config, env, helpers, options) => {
    // Use any `index` file, not just index.js
    config.resolve.alias['preact-cli-entrypoint'] = resolve(
        process.cwd(),
        'src',
        'index'
    )

    // Stylus
    const stylusRule = config.module.rules.find(
        (rule) => String(rule.test) === String(/\.styl$/)
    )
    stylusRule.use[0].options.options.paths =
        stylusRule.use[0].options.options.paths[0]

    stylusRule.use[0].options.options.module = false

    config.plugins.push(
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: `${__dirname}/assets`,
                    to: `${__dirname}/build/assets`
                },
                {
                    from: `${__dirname}/assets/robots.txt`,
                    to: `${__dirname}/build/robots.txt`
                }
            ]
        })
    )
}
