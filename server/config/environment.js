const dev_environment = {
    port : 3000,
    frontUrl : 'http://localhost:4200',
    backUrl: 'http://localhost:3000',
    production: false
}

const prod_environment = {
    port: 3000,
    frontUrl: 'https://www.osai-web.com',
    backUrl: 'https://www.osai-web.com:3000',
    production: true
}
// Comment out the one you don't want
// module.exports = dev_environment; 
module.exports = prod_environment;