const path = require('path')

const express = require('express')
const rootDir = require('../util/path.js')

const router = express.Router()

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'Views', 'PatientDashboard.html'))
})

module.exports = router;