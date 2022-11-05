// build your server here and require it from index.js
const projectsRouter = require('./project/router')
const resourceRouter = require('./resource/router')
const taskRouter = require('./task/router')

const express = require('express')
const server = express()

server.use(express.json())
server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourceRouter)
server.use('/api/task', taskRouter)

server.use('*', (req, res) => {
    res.status(404).json({message: 'not found'})
})

module.exports = server