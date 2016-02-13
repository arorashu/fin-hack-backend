/**
 * Created by shubham on 13/2/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/innovision');
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

var Account = new Schema({
    accNo: Number,
    provider: String,
    providerData: Object,
    accessToken: String,
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

Account.plugin(autoIncrement.plugin, {model: 'Account', field: 'accNo'});
Account.plugin(passportLocalMongoose, {usernameField: 'email', usernameLowerCase: true});

module.exports = mongoose.model('Account', Account);
