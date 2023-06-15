radio.onReceivedNumber(function (receivedNumber) {
    let receivednumber = 0
    led.setBrightness(led.brightness() + receivednumber)
})
radio.onReceivedString(function (receivedString) {
    let ReceivedString = ""
    if (ReceivedString == "POWER") {
        encendido = !(encendido)
        led.setBrightness(125)
        led.enable(encendido)
    }
})
let encendido = false
radio.setGroup(1)
encendido = false
led.enable(encendido)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
