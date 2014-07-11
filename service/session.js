var Session = require('../model/session.js');
var Model = require('../model/model.js');
var ResponseCodes = require('./response-codes.js');

exports.post = function(request, response) {
    if(request.path == '/service/session') {
        Model.fetchPlayer(request.body.username, function(player) {
            if(player != undefined && player != null) {
                var session = new Session.create();
                session.player = player.id;

                Model.saveSession(session, function(result) {
                    response.send(new SessionResponse(session, ResponseCodes.codes.Success));
                });
            } else {
                response.send(new SessionResponse(null, ResponseCodes.codes.AuthenticationFailed));
            }
        });
    } else {
        response.send(new SessionResponse(null, ResponseCodes.codes.BadServicePath));
    }
};

var SessionResponse = function(session, sessionResponse) {
    this.session = session;
    this.result = sessionResponse;
}