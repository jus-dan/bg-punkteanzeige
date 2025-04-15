input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    Punkte = 7
    _4digit.show(Punkte)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    Punkte += 1
    _4digit.show(Punkte)
    music.play(music.createSoundExpression(WaveShape.Square, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
})
let Punkte = 0
let _4digit: grove.TM1637 = null
_4digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4digit.set(7)
Punkte = 0
_4digit.show(Punkte)
