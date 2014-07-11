scenes.login = new LoginScene();

function LoginScene() {
    this.init = function() {
        $("#console").addClass('tradelight-login');
        $("#console").html(
            '<div class="ui-widget-header">TradeLight Terminal</div>' +
                '<div class="tradelight-login-window">' +
                'Login:<br />' +
                '<input id="username" type="textbox" style="margin-bottom: 15px;"/>' +
                '<br />' +
                'Password:<br />' +
                '<input id="password" type="password" style="margin-bottom: 15px;"/>' +
                '</div>' +
                '<div id="connect">Connect</div>'
        );

        // Add some checking / loading on-click
        $("#connect").button().click(function() {
            service.login($("#username").val(), $("#password").val());
            transitionScene('dashboard');
        });
    };
};