let number = 0
input.onGesture(Gesture.Shake, function () {
    number += 1
    basic.showNumber(number)
})
basic.forever(function () {
	
})
