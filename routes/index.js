var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login/fb', passport.authenticate('facebook',
    {authType: 'rerequest', scope: ['email', 'user_birthday']}));

router.post('/login', function (req,res) {



});

module.exports = router;
