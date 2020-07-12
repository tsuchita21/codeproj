module.exports = function (app, addon) {

    var _ = require('lodash');
    var util = require('util');

    app.get('/', function (req, res) {
        res.format({
            'text/html': function () {
                res.redirect('/atlassian-connect.json');
            },
            'application/json': function () {
                res.redirect('/atlassian-connect.json');
            }
        });
    });

    var iconPath = 'images/icons/sport/',
            sports = [
                { id: 'nfl', name: 'American Football', icon: iconPath + 'american_football.png'},
                { id: 'baseball', name: 'Baseball', icon: iconPath + 'baseball.png'},
                { id: 'basketball', name: 'Basketball', icon: iconPath + 'basketball.png'},
                { id: 'football', name: 'Football', icon: iconPath + 'football.png'},
                { id: 'golf', name: 'Golf', icon: iconPath + 'golf.png'},
                { id: 'tennis', name: 'Tennis', icon: iconPath + 'tennis.png'}
            ];

    function renderMacro(req, res) {
        var requestSport = req.param('sport');
        var sport = _.find(sports, function (_sport) {
           return requestSport === _sport.id;
        });

        if(!sport) {
           sport = sports[0];
        }

        res.render('macro/macro-view', {
            sport: sport
        });
    }

    app.get('/macro', addon.authenticate(), function (req, res) {
        renderMacro(req, res);
    });

    app.get('/macro-page', addon.authenticate(), function (req, res) {
        renderMacro(req, res);
    });

    app.get('/editor', addon.authenticate(), function (req, res) {
        // Rendering a template is easy. `render()` takes two params: name of template and a
        // json object to pass the context in.
        res.render('macro/macro-editor', {
            baseUrl: res.locals.hostBaseUrl,
            sports: sports
        });
    });

    app.get('/dialog', addon.authenticate(), function (req, res) {
        res.render('dialog', {
            baseUrl: res.locals.hostBaseUrl,
            spaceKey: req.param('spaceKey'),
            spaceId: req.param('spaceId')
        });
    });

    app.get('/hello-world', addon.authenticate(), function (req, res) {
        res.render('hello-world', {
            baseUrl: res.locals.hostBaseUrl
        });
    });

    app.get('/conditions/dialog', addon.authenticate(), function (req, res) {
        res.render('conditions/dialog', {
            shouldDisplay: true
        });
    });

};
