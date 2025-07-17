const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {

    console.log('OK')
    app.use(cors({
        origin: '*'
    }))
    
}