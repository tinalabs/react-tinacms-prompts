const { createJestConfig } = require('@tinacms/scripts')
const pack = require('./package')
module.exports = createJestConfig(pack)