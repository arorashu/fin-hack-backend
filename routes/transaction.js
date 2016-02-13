/**
 * Created by shubham on 13/2/16.
 */

var express = require('express');
var User = require('../models/User');
var Bank = require('../models/Bank');
var Transaction = require('../models/Transactions');
var router = express.Router();

router.get('/all', function (req, res) {

    Transaction.find({}).lean().exec(function (err, transac) {
        console.log(transac);
        res.json( {transactions: transac});
    });
});

router.post('/new', function (req, res) {

    transac = new Transaction({
       userNo: req.body.userNo,
        amount: req.body.amount,
        type: req.body.type,
        description: req.body.description,
        date: Date.now()
    });

    transac.save(function (err, transac) {
        if(err ){

            res.json({error: err});
        }
        else {
            res.json({added: true, transaction: transac});
        }
    });

    Bank.update({userNo: req.body.userNo}, { $inc: { balance: (-1)*req.body.amount }}, function (err, bank) {
        if(err){
            res.json({error: err});
            console.log(err);
        }
    });
});

module.exports = router;