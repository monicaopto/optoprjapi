const mongoose = require('mongoose')

const brandSchema = new mongoose.Schema({
    IDBFactory:{
        type: String, 
        require : true
    },
    name:{
        type: String, 
        require : true
    },
    desc:{
        type: String, 
        require : true
    }

})

module.exports = mongoose.model('brands',brandSchema)