/**
 * Created by shubham on 13/2/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/moneyManager');
autoIncrement.initialize(connection);

var nameValidator = [
    validate({
        validator: 'isLength',
        arguments: [3, 50],
        message: 'Name should be between 3 and 50 characters'
    })
];
var emailValidator=[
    validate({
        validator: 'isEmail',
        message: "not a valid email"
    })
];
var phoneValidator = [
    validate({
        validator: 'isLength',
        arguments: [10, 10],
        message: 'phonenumber should be 10 digits'
    })
];

var User = new Schema({
    userNo: Number,
    password: String,
    email: {type:String, validator:emailValidator, unique:true, dropDups:true, trim: true},
    firstName: String,
    lastName: String,
    photo: String,
    dob: Date,
    gender: String,
    phone_no: {type:String, validate:phoneValidator, unique:true, dropDups:true, sparse:true, trim: true},
    dateJoined: Date,
    is_new: {type:Boolean,default:true}
});

User.plugin(autoIncrement.plugin, {model: 'User', field: 'userNo'});

module.exports = mongoose.model('User', User);
