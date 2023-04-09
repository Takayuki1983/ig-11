input.onButtonPressed(Button.B, function on_button_pressed_b() {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Butterfly)
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function on_forever() {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    
})
