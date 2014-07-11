exports.create = function() {
    return new Player();
}

function Player(){
    this.id = 1;
    this.name = 'unknown';
}