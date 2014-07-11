function Service() {
    this.login = function(username, password) {
        $.ajax({
            type: 'POST',
            dataType: "json",
            url: './service/session',
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({'username': username, 'password': password}),
            success: function(data) {
                player = data;

                TODO: Extract Session and Player information
            }
        });
    };
};
