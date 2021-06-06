const express = require('express');
const router = express.Router()

const brands = require('../models/brand')

router.get('/', async(req,res) =>{
    try {
            const brand = await brands.find()
            res.json(brand)
        
    } catch (err) {
        res.send('Error = '+err)
    }
    });

module.exports = router