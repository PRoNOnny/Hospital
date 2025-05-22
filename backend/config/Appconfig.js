class AppConfig {

    constructor(config) {
        this._appPort = config.get('port')
        this._appLocalHost = config.get('localhost')
    }

    get appLocalHost() {
        return this._appLocalHost
    }

    get appPort() {
        return this._appPort
    }
}

module.exports = AppConfig;