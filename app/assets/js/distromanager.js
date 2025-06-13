const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Old WesterosCraft url.
// exports.REMOTE_DISTRO_URL = 'http://mc.westeroscraft.com/WesterosCraftLauncher/distribution.json'
exports.REMOTE_DISTRO_URL = 'https://www.dropbox.com/scl/fi/yy67nehx7tidx4f6tazlr/distribution.json?rlkey=6a0gwfrm4xym9cv8exzo2pjpi&st=dtv5wl2d&dl=1'
// exports.np_empire = 'http://www.onyx-studio.ct.ws/nebula/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    console.log('[DEBUG]: DistributionAPI a ete charger'),
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api