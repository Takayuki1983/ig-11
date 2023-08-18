huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
let servo_angle = 90
let X = huskylens.readeBox(0, Content1.xCenter)
pins.servoWritePin(AnalogPin.P1, 90)
pins.analogWritePin(AnalogPin.P4, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(0, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        while (0 < X && X < 150) {
            basic.showIcon(IconNames.Heart)
            servo_angle += 4
            pins.servoWritePin(AnalogPin.P1, servo_angle)
        }
        while (150 <= X && X <= 170) {
            basic.showIcon(IconNames.SmallHeart)
            pins.servoWritePin(AnalogPin.P1, 90)
            pins.analogWritePin(AnalogPin.P4, 1023)
        }
        while (170 < X && X < 320) {
            basic.showIcon(IconNames.Butterfly)
            servo_angle += -4
            pins.servoWritePin(AnalogPin.P1, servo_angle)
        }
    }
})
