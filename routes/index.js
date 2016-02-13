var express = require('express');
var User = require('../models/User');
var Bank = require('../models/Bank');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'SSR Money Manager' });
    res.json({title: "SSR Money Manager"});
});


router.post('/login', function (req, res) {

    User.findOne({email: req.body.email, password: req.body.password}, function (err, newUser) {
        if(err || !newUser) {
            res.json({error: true});
        }
        else
        {
            res.json({login: true, user: newUser});
        }
    })
});

router.post('/register', function (req, res) {
    console.log("here i am1");
    user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone_no: req.body.phone_no
    });

    user.save(function (err, user) {
        console.log("here i am2");
        if(err) {
            console.log(err);
            res.json({error: true});
        }
        else
        {
            res.json({register: true, user: user});
        }
    })
});


router.post('/start', function (req, res) {

    bank = new Bank({
       userNo: req.body.userNo,
        balance: req.body.balance,
        monthlyCredit: req.body.monthlyCredit
    });

    bank.save(function (err, bank) {
        if(err){
            res.json({error: err});
        }
        else{
            res.json({bank: bank});
        }
    });

});


router.get('/getBalance', function (req, res) {

    Bank.findOne({}, function (err, bank) {
        if(err || !bank) {
            res.json({error: err});
        }
        else {
            res.json({balance: bank.balance});
        }
    });
});


router.get('/logout', function (req, res) {
  //incomplete
  res.json({logout: true});
});

router.get('/test', function (req, res) {
    res.json({this: "works"});
});


module.exports = router;
