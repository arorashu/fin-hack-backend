/**
 * Created by shubham on 13/2/16.
 */

var express = require('express');
var User = require('../models/User');
var router = express.Router();
var Location = require('../models/Locations');

var foursquare = require('node-foursquare-venues')('XYJC3AVZVXDLACGFI1V4KGUC5QDA5G2ZGQSUPYFNQFTVCEOA', '3QQ0WLLXPFYN3OCINWUG5PE4RK4HRCPEHSWOFHWSXEMMMEG5');

router.post('/update', function (req, res) {
    loc = new Location({
        userNo: req.body.userNo,
        latitude: req.body.latitude,
        longitude: req.body.longitude
    });

    loc.save(function (err, loc) {
        if(err){
            res.json({error: err});
        }

        else {
            var parameters = {
                ll:req.body.latitude+','+req.body.longitude,
                limit: 1,
                sortByDistance: 1

            };

            foursquare.venues.explore(parameters, function (err, places) {

                if(err){
                    res.json({error: err});
                }
                else {
                    locn = new Location({
                        userNo: req.body.userNo,
                        latitude: req.body.latitude,
                        longitude: req.body.longitude,
                        place: places.response.groups[0].items[0].venue.name
                    });

                    locn.save(function (err, locn) {
                        if(err){
                            res.json({error: err});
                        }
                        else
                        {
                            var query = Location.find({place: place});
                            query.limit(5);

                            res.json({location: locn});
                        }
                    });
                }
            });
        }

    });
});

module.exports = router;