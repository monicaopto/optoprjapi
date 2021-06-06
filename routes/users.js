const express = require('express');
const router = express.Router()

const users = require('../models/user')

router.get('/', async(req,res) =>{
    try {
            const user = await users.find()
            res.json(user)
        
    } catch (err) {
        res.send('Error = '+err)
    }
});

router.get('/:id', async(req,res) =>{
    try {
            const user = await users.findById(req.params.id)
            console.log(req.query.name)
            res.json(user)
        
    } catch (err) {
        res.send('Error = '+err)
    }
});

//Post Users to add new user 
router.post();

module.exports = router