const express = require('express')
const router = express.Router()

const people = require('./routes/people')
const auth = require('./routes/auth')

router.post('/', (req,res)=>{
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }

    res.status(401).send('Please Provide Credential')
})

module.exports = router