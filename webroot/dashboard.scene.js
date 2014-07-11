scenes.dashboard = new DashboardScene();

function DashboardScene() {
    this.init = function() {
        $("#console").html(
            'Welcome to the dashboard <br />' +
                'Current location: Centari IV' +
                'Current time: 14.21:22.98.07:35.10.07' +
                '<br />' +
                '<div id="ship-status">Ship Status</div>' +
                '<div id="contracts">Contracts</div>'
        );

        $("#ship-status").button().click(function() {
            transitionScene('shipStatus');
        });
    };
};