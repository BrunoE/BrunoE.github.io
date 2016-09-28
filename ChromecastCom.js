var app_id = "1AA02BA5";
var namespace = "urn:x-cast:com.example.chrome_send_world_2";

function onChannelOpened(event)
{
    var string = "onChannelOpened. Total number of channels: " + window.castReceiverManager.getSenders().length;
}

function onChannelClosed(event)
{
    if (window.castReceiverManager.getSenders().length == 0) window.close();
}

function onMessage(event)
{
    var message = event.data;

    whatCommand(message);
}

function onLoad()
{
    window.castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

    window.castReceiverManager.onSenderConnected = onChannelOpened;
    window.castReceiverManager.onSenderDisconnected = onChannelClosed;

    window.customMessageBus = window.castReceiverManager.getCastMessageBus(namespace);
    window.customMessageBus.onMessage = onMessage;

    window.castReceiverManager.start();
}

window.addEventListener("load", onLoad);