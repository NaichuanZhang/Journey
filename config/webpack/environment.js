const { environment } = require('@rails/webpacker')


const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default'],
    tilt: 'tilt.js/src/tilt.jquery',
  })
)

module.exports = environment
