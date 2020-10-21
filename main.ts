input.onButtonPressed(Button.A, function () {
    compass = input.compassHeading()
    if (compass <= 22.5) {
        basic.showString("N")
    } else if (compass <= 67.5) {
        basic.showString("NE")
    } else if (compass <= 112.5) {
        basic.showString("E")
    } else if (compass <= 157.5) {
        basic.showString("SE")
    } else if (compass <= 202.5) {
        basic.showString("S")
    } else if (compass <= 247.5) {
        basic.showString("SW")
    } else if (compass <= 292.5) {
        basic.showString("W")
    } else if (compass <= 337.5) {
        basic.showString("NW")
    } else {
        basic.showString("N")
    }
})
radio.onReceivedString(function (receivedString) {
    signal = radio.receivedPacket(RadioPacketProperty.SignalStrength)
    led.plotBarGraph(
    Math.map(signal, -128, -42, 0, 9),
    9
    )
})
let signal = 0
let compass = 0
radio.setGroup(1)
radio.setTransmitPower(7)
basic.forever(function () {
    radio.sendString("")
    basic.pause(200)
})
