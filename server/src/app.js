const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.get('/', (req, res) => {
    res.send({
        message: 'hellooo'
    })
})

app.listen(process.env.PORT || 8081, function () {
    console.log('running')
})