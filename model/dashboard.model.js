'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  dashboardSchema = new Schema({
    Id: {
        type: Number,
        required: true
    },
    userId: {
        type: Number,
        // ref:'',
        required: true
    },
    totalProductDaily: {
        type: Number ,
        required: true
    },
    totalProductMonth: {
        type: Number ,
        required: true
    },
    totalProductYearly: {
        type: Number ,
        required: true
    },
    
    totalAmount: {
        type: Number,
        required: true
    },
    dateOfCreated:{
        type:String,
        required:true
    }, 
    createdBy: {
        type: String,
        required: true
    } ,
    status: {
        type: String,
        required: true
    } ,
    isActive: {
        type: String,
        required: true
    },
    isDelete: {
        type: String,
        required: true
    }
});


dashboardSchema.plugin(require('mongoose-timestamp'));
dashboardSchema.plugin(require('mongoose-delete'), {
    overrideMethods: true,
    deletedAt: true
});

module.exports = mongoose.model('dashboard', dashboardSchema);
