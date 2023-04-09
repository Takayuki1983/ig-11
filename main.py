def on_button_pressed_b():
    music.play_tone(262, music.beat(BeatFraction.WHOLE))
    basic.show_icon(IconNames.BUTTERFLY)
input.on_button_pressed(Button.B, on_button_pressed_b)

huskylens.init_i2c()
huskylens.init_mode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)

def on_forever():
    huskylens.request()
    if huskylens.is_appear(1, HUSKYLENSResultType_t.HUSKYLENS_RESULT_BLOCK):
        basic.show_icon(IconNames.HEART)
    else:
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)


##スピーチのスケッチ。マイクロパイソンでのみ作動
#from microbit import *
#import speech

#while True:
   
    #if button_b.is_pressed():
    #    speech.say("E mono wo Massatsu - seyo", speed=110, pitch=100, throat=100, mouth=200)

