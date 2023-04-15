input.onButtonPressed(Button.B, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showIcon(IconNames.Butterfly)
})
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        basic.pause(500)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
    }
})
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        basic.showIcon(IconNames.Butterfly)
        maqueen.servoRun(maqueen.Servos.S1, 0)
        basic.pause(100)
        maqueen.servoRun(maqueen.Servos.S1, 20)
        basic.pause(100)
        maqueen.servoRun(maqueen.Servos.S1, 0)
        maqueen.servoRun(maqueen.Servos.S2, 54)
        basic.pause(500)
        maqueen.servoRun(maqueen.Servos.S2, 0)
        basic.pause(2000)
    } else {
        basic.clearScreen()
        maqueen.servoRun(maqueen.Servos.S1, 0)
        maqueen.servoRun(maqueen.Servos.S2, 20)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
