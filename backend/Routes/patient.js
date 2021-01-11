const path = require('path')

const express = require('express');
const rootDir = require('../Util/path.js')

const router = express.Router();

router.get('/addMBR',(req, res, next) => {
    //console.log(rootDir)
    res.sendFile(path.join(rootDir,'Views', 'Add_Patient_MBR.html'))
})

router.post('/returnMedicalReport', (req, res, next) => {
    console.log(req.body)
    console.log('Moshi Moshi')
    res.redirect('/')
})

module.exports = router;