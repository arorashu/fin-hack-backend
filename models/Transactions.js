/**
 * Created by shubham on 13/2/16.
 */


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var connection = mongoose.createConnection('mongodb://127.0.0.1:27017/moneyManager');



var Transaction = new Schema({
    userNo: Number,
    amount: Number,
    type: String,
    locationNickName: String,
    latitude: Number,
    longitude: Number,
    description: String,
    date: Date
});

module.exports = mongoose.model('Transaction', Transaction);
