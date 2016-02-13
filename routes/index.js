var express = require('express');
var passport = require('passport');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login/fb', passport.authenticate('facebook',
    {authType: 'rerequest', scope: ['email', 'user_birthday']}));

router.get('/login/fb/callback',
    passport.authenticate('facebook', {
      failureRedirect: '/login'
    }), function(req, res) {
      if (req.user.is_new) {
        res.redirect('/users/details');
      } else {
        res.redirect('/');
      }
    }, function(err, req, res) {
      if(err) {
        req.logout();
        res.json({logout: true} );
      }
    }
);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), function (req, res) {
  res.json({login: true});
});

router.get('/logout', function (req, res) {
  req.logout();
  res.json({logout: true});
});

module.exports = router;
