'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const  UserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } ,
    dob:{
        type:String,
        required:true
    },
    roleId: {
        type: String,
        required: true
    },
    isActive: {
        type: String,
        required: true
    },
    isDelete: {
        type: String,
        required: true
    }
});


UserSchema.plugin(require('mongoose-timestamp'));
UserSchema.plugin(require('mongoose-delete'), {
    overrideMethods: true,
    deletedAt: true
});

module.exports = mongoose.model('User', UserSchema);
