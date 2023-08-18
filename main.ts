/**
 * 顔を認識すると
 * 
 * カクカクしながらその方向へ回る。
 * 
 * 一回動いたらそのあとは動かなくなる
 */
function LED_flash_white () {
    for (let index = 0; index < 4; index++) {
        pins.analogWritePin(AnalogPin.P4, 0)
        basic.pause(100)
        pins.analogWritePin(AnalogPin.P4, 1023)
        basic.pause(100)
    }
}
function Head_shake () {
    for (let index = 0; index < 3; index++) {
        pins.servoWritePin(AnalogPin.P1, servo_angle - 3)
        basic.pause(1000)
        pins.servoWritePin(AnalogPin.P1, servo_angle + 3)
    }
}
function Face_track () {
    if (0 < X && X < 150) {
        servo_angle += 2
        pins.servoWritePin(AnalogPin.P1, servo_angle)
        pins.analogWritePin(AnalogPin.P4, 0)
    } else if (150 <= X && X <= 170) {
        pins.servoWritePin(AnalogPin.P1, servo_angle)
        pins.analogWritePin(AnalogPin.P4, 1023)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P16, 1023)
        pins.servoWritePin(AnalogPin.P1, 90)
    } else if (170 < X && X < 320) {
        servo_angle += -2
        pins.servoWritePin(AnalogPin.P1, servo_angle)
        pins.analogWritePin(AnalogPin.P4, 0)
    } else {
    	
    }
}
function Ramdom_move () {
    if (Math.randomBoolean()) {
        pins.servoWritePin(AnalogPin.P1, 90)
        for (let index = 0; index < 10; index++) {
            servo_angle += 2
            pins.servoWritePin(AnalogPin.P1, servo_angle)
        }
        basic.pause(500)
        Head_shake()
        basic.pause(2000)
        for (let index = 0; index < 15; index++) {
            servo_angle += -2
            pins.servoWritePin(AnalogPin.P1, servo_angle)
            basic.pause(3000)
        }
    } else {
        pins.servoWritePin(AnalogPin.P1, 90)
        basic.pause(2000)
        for (let index = 0; index < 15; index++) {
            servo_angle += 2
            pins.servoWritePin(AnalogPin.P1, servo_angle)
        }
        basic.pause(2000)
        for (let index = 0; index < 10; index++) {
            servo_angle += -2
            pins.servoWritePin(AnalogPin.P1, servo_angle)
        }
        basic.pause(1000)
        LED_flash_white()
        basic.pause(1000)
        Head_shake()
        basic.pause(2000)
    }
}
let X = 0
let servo_angle = 0
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
servo_angle = 90
pins.servoWritePin(AnalogPin.P1, 90)
pins.analogWritePin(AnalogPin.P4, 0)
pins.analogWritePin(AnalogPin.P16, 0)
basic.forever(function () {
    huskylens.request()
    X = huskylens.readeBox(0, Content1.xCenter)
})
basic.forever(function () {
    if (huskylens.isAppear_s(HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        Face_track()
    } else {
        Ramdom_move()
    }
})
