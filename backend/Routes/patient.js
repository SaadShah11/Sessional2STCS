const path = require('path')

const express = require('express');
const rootDir = require('../Util/path.js')

const router = express.Router();

router.get('/addMBR',(req, res, next) => {
    //res.sendFile(path.join(rootDir, 'views', 'Add_Patient_MBR'))
})

router.post('./returnMedicalReport', (req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;