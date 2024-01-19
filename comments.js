import express from 'express'
import https from 'https'
import fs from 'fs'
import morgan from 'morgan'

const app = express()
const port = process.env.PORT || 443 // Set the port as an environment variable or use 443 as default

// Use morgan as a logger
app.use(morgan('combined'))

// Your routes and middleware here...

const options = {
    key: fs.readFileSync('path/to/private.key'),
    cert: fs.readFileSync('path/to/certificate.crt')
}

const server = https.createServer(options, app)

server.listen(port, () => {
    console.log(`HTTPS server running on port ${port}`)
})
