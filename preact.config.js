import CopyWebpackPlugin from "copy-webpack-plugin"

export default (config, env, helpers, options) => {
    const stylusRule = config.module.rules.find(
        (rule) => String(rule.test) === String(/\.styl$/)
    )
    stylusRule.use[0].options.options.paths =
        stylusRule.use[0].options.options.paths[0]

    stylusRule.use[0].options.options.module = false

    config.plugins.push(
        new CopyWebpackPlugin([{ from: `${__dirname}/assets`, to: `${__dirname}/build/assets` }])
    )
}
