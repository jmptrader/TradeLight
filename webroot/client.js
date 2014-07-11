scenes = new Object();

window.addEventListener('load', initTradeLight);

function initTradeLight(event) {
    transitionScene('loading');
};

function transitionScene(scene) {
    if(scenes[scene] == undefined) {
        // Load the scene
        $.ajax({
            type: "GET",
            url: "./" + scene + ".scene.js",
            dataType: "script"
        }).done(function() {
            transitionScene(scene);
        });
    } else {
        $("#console").fadeOut(1000, function() {
            $("#console").attr('style', '');
            $("#console").attr('class', '');
            $("#console").html('');

            scenes[scene].init();

            $("#console").fadeIn(250);
        });
    }
};