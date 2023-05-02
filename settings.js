
var chatSettings = {
    URI: 'https://oda-88795e9771544ccfa0671e4b7c696b1c-da6d747a.data.digitalassistant.oci.oraclecloud.com',
    channelId: 'bb68f58f-5171-4578-9b45-a2bd7ff2a896'
};

function initSDK(name) {
    // If WebSDK is not available, reattempt later
    if (!document || !WebSDK) {
        setTimeout(function() {
            initSDK(name);
        }, 2000);
        return;
    }

    // Default name is Bots
    if (!name) {
        name = 'Bots';
    }

    setTimeout(function() {
        var Bots = new WebSDK(chatSettings);    // Initiate library with configuration

        var isFirstConnection = true;
        Bots.on(WebSDK.EVENT.WIDGET_OPENED, function() {
            if (isFirstConnection) {
                Bots.connect()                          // Connect to server
                    .then(function() {
                        console.log('Connection Successful');
                    })
                    .catch(function(reason) {
                        console.log('Connection failed');
                        console.log(reason);
                    });
                   isFirstConnection = false;
            }
        });

        window[name] = Bots;
    }, 0);
}