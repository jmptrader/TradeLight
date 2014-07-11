scenes.shipStatus = new ShipStatusScene();

function ShipStatusScene() {
    this.init = function() {
        $("#console").html(
            'Ship Status'
        );
    };
};