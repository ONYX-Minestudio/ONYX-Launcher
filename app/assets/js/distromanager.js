const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')



// Old WesterosCraft url.
// exports.DISTRO_FILE = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
exports.DISTRIBUTION_FILE = 'https://www.dropbox.com/scl/fi/41xymszmw19aqkch1xs3m/distribution.json?rlkey=mo4cz8p89nd9bsqaexk8fb2lg&st=2ym36men&dl=1'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null,
    null,
    exports.DISTRIBUTION_FILE,
    false
)

exports.DistroAPI = api