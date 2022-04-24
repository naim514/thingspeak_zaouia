input.onButtonPressed(Button.A, function () {
    KSRobot_IOT.MQTTPublish("channels/1028055/publish/fields/field1", "22")
})
input.onButtonPressed(Button.B, function () {
    KSRobot_IOT.MQTTSubscribe("channels/1028055/subscribe/fields/field1")
    basic.pause(2000)
    basic.showString(KSRobot_IOT.Receive_Data())
})
KSRobot_IOT.Wifi_setup(
SerialPin.P15,
SerialPin.P8,
"Ooredoo 4G_DE143A",
"21554265",
KSRobot_IOT.IOT_Config.STATION
)
KSRobot_IOT.MQTT_set(
"mqtt://mqtt3.thingspeak.com",
1883,
"MB8eGQw8ECITDzgDFDk4JCU",
"MB8eGQw8ECITDzgDFDk4JCU",
"5FHitnj3V/FB0bcHTvNQGGs5"
)
