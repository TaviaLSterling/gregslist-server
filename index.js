let express = require('express')
let server = express()
let bp = require('body-parser')
let port = 3000
//Connect to db
require('./server-assets/db/mlab-config')

//register middleware
server.use(bp.json())
server.use(bp.urlencoded({
    extended: true
}))

let carRoutes = require('./server-assets/routes/Car-routes')
server.use('/car',carRoutes)