var math = require('mathjs');

exports.create = function() {
    return new Session();
}

function Session() {
    this.id = math.random(900000000);
    this.player = null;
}