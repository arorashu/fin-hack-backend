var express = require('express');
var User = require('../models/User');
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

        res.json({login: true, user: newUser});
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
        res.json({register: true, user: user});
    })
});


router.get('/logout', function (req, res) {
  //incomplete
  res.json({logout: true});
});

router.get('/test', function (req, res) {
    res.json({this: "works"});
});

module.exports = router;
