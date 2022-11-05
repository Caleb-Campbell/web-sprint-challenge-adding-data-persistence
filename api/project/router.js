// build your `/api/projects` router here
const express = require('express')
const Projects = require('./model')

const router = express.Router()

router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(error => {
        console.log(error)
    })

})

module.exports = router
