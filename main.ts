input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Punkte = 0
    _4digit.show(Punkte)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    Highscore = 0
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    Punkte += 1
    _4digit.show(Punkte)
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
let Highscore = 0
let Punkte = 0
let _4digit: grove.TM1637 = null
_4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.set(7)
Punkte = 0
Highscore = 0
_4digit.show(Punkte)
basic.forever(function () {
    if (Punkte > Highscore) {
        Highscore = Punkte
    }
    basic.showString("H:" + Highscore)
    basic.pause(500)
})
