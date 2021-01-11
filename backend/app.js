
const express = require('express')
const parser = require('body-parser')

const patientRouter = require('./Routes/patient.js')
const patientDashboard = require('./Routes/Home.js')

const app = express()

app.use(parser.urlencoded({extended:false}))

app.use(patientRouter);
app.use(patientDashboard)

app.use((req, res, next) => {
    res.status(404).send('<h1>404 Page Not Found</h1>')
})

app.listen(3000);