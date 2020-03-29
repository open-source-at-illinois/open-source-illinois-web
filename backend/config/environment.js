const dev_environment = {
    port : 3000,
    frontUrl : 'http://localhost:4200',
    backUrl: 'http://localhost:3000/',
    production: false
}

const prod_environment = {
    port: 3000,
    frontUrl: 'https://www.osai-web.com',
    backUrl: 'https://www.osai-web.com/back-end/',
    production: true
}

if (process.env.PROD) {
    module.exports = dev_environment;
else {
    module.exports = prod_environment;
}

