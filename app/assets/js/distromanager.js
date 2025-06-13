const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://onyx-studio.ct.ws/nebula/distribution.json?i=1 '
// exports.np_empire = 'http://www.onyx-studio.ct.ws/nebula/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    console.log('[DEBUG]: DistributionAPI a ete charger'),
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api