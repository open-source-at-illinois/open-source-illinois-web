const dev_environment = {
    frontUrl : 'http://localhost:4200',
    backUrl: 'http://localhost:3000/',
    authDomain: "dev-3mntwbjz.auth0.com",
    production: false
};

const staging_environment = {
    frontUrl: 'https://staging.osai-web.com',
    backUrl: 'https://staging.osai-web.com/back-end/',
    authDomain: "",
    production: true
};

const prod_environment = {
    frontUrl: 'https://www.osai-web.com',
    backUrl: 'https://www.osai-web.com/back-end/',
    authDomain: "dev-3mntwbjz.auth0.com",
    production: true
};

var environment = {
    port: process.env.PORT || '3000',
    mongo_uri: process.env.MONGO_URI
};

if (process.env.PROD) {
    Object.assign(environment, prod_environment);
} else if (process.env.STAGING) {
    Object.assign(environment, staging_environment);
} else {
    Object.assign(environment, dev_environment);
}

module.exports = environment;

