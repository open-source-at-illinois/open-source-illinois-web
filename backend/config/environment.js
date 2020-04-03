const dev_environment = {
    frontUrl : 'http://localhost:4200',
    backUrl: 'http://localhost:3000/',
    production: false
};

const prod_environment = {
    frontUrl: 'https://www.osai-web.com',
    backUrl: 'https://www.osai-web.com/back-end/',
    production: true
};

var environment = {
    port: process.env.PORT || '3000',
    mongo_uri: process.env.MONGO_URI
};


if (process.env.PROD) {
    const credentials = {
        key: process.env.PRIVKEY,
        cert: process.env.PUBKEY
    };
    Object.assign(environment, prod_environment);
    Object.assign(environment, {
        'credentials': credentials
    });
} else {
    Object.assign(environment, dev_environment);
}

module.exports = environment;

