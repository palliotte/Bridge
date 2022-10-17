radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    item = item - 1
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(item)
})
input.onButtonPressed(Button.B, function () {
    item = item + 1
})
let item = 0
radio.setGroup(2345)
item = 1
let text_list = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.forever(function () {
    if (item == 0) {
        item = 26
    }
    if (item == 27) {
        item = 1
    }
})
basic.forever(function () {
	
})
