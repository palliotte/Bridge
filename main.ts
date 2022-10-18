radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("" + (text_list[receivedNumber]))
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
let text_list: string[] = []
let item = 0
radio.setGroup(2345)
item = 0
text_list = [
"A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"
]
basic.forever(function () {
    if (item == -1) {
        item = 25
    }
    if (item == 26) {
        item = 0
    }
})
basic.forever(function () {
    basic.showString("" + (text_list[item]))
})
