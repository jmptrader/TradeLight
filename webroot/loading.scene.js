scenes.loading = new LoadingScene();

function LoadingScene() {
    this.init = function() {
        $("#console").html('Loading...');

        $.when($.ajax({
            type: "GET",
            url: "./service.js",
            dataType: "script"
        })).done(function() {
            service = new Service();
            transitionScene('login');
        });
    };
};