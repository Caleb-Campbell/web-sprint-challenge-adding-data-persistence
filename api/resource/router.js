// build your `/api/resources` router here
const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'hey its working'})
})

module.exports = router
