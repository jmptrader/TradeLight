exports.create = function() {
    return new Ship();
}

function Ship() {
    this.ship_name = 'SS Minnow';
    this.cargo_space = 60;
};
