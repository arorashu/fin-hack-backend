/**
 * Created by shubham on 13/2/16.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/moneyManager');



var Bank = new Schema({
    userNo: Number,
    balance: Number,
    monthlyCredit: Number
});

module.exports = mongoose.model('Bank', Bank);
