/**
 * Created by shubham on 13/2/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var validate = require('mongoose-validator');
var autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/moneyManager');



var Bank = new Schema({
    userNo: Number,
    bankName: String,
    name: String,
    Balance: Number,
    monthlyCredit: Number,
});

module.exports = mongoose.model('Bank', Bank);
