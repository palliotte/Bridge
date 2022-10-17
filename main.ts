radio.onReceivedNumber(function on_received_number(receivedNumber: number) {
    if (receivedNumber == 1) {
        serial.writeLine("A")
    }
    
    if (receivedNumber == 2) {
        serial.writeLine("B")
    }
    
    if (receivedNumber == 3) {
        serial.writeLine("C")
    }
    
    if (receivedNumber == 4) {
        serial.writeLine("D")
    }
    
    if (receivedNumber == 5) {
        serial.writeLine("E")
    }
    
    if (receivedNumber == 6) {
        serial.writeLine("F")
    }
    
    if (receivedNumber == 7) {
        serial.writeLine("G")
    }
    
    if (receivedNumber == 8) {
        serial.writeLine("H")
    }
    
    if (receivedNumber == 9) {
        serial.writeLine("I")
    }
    
    if (receivedNumber == 10) {
        serial.writeLine("J")
    }
    
    if (receivedNumber == 11) {
        serial.writeLine("K")
    }
    
    if (receivedNumber == 12) {
        serial.writeLine("L")
    }
    
    if (receivedNumber == 13) {
        serial.writeLine("M")
    }
    
    if (receivedNumber == 14) {
        serial.writeLine("N")
    }
    
    if (receivedNumber == 15) {
        serial.writeLine("O")
    }
    
    if (receivedNumber == 16) {
        serial.writeLine("P")
    }
    
    if (receivedNumber == 17) {
        serial.writeLine("Q")
    }
    
    if (receivedNumber == 18) {
        serial.writeLine("R")
    }
    
    if (receivedNumber == 19) {
        serial.writeLine("S")
    }
    
    if (receivedNumber == 20) {
        serial.writeLine("T")
    }
    
    if (receivedNumber == 21) {
        serial.writeLine("U")
    }
    
    if (receivedNumber == 22) {
        serial.writeLine("V")
    }
    
    if (receivedNumber == 23) {
        serial.writeLine("W")
    }
    
    if (receivedNumber == 24) {
        serial.writeLine("X")
    }
    
    if (receivedNumber == 25) {
        serial.writeLine("Y")
    }
    
    if (receivedNumber == 26) {
        serial.writeLine("Z")
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    item = item - 1
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    radio.sendNumber(item)
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    item = item + 1
})
let item = 0
radio.setGroup(1)
item = 1
basic.forever(function on_forever() {
    if (item == 1) {
        basic.showString("A")
    }
    
    if (item == 2) {
        basic.showString("B")
    }
    
    if (item == 3) {
        basic.showString("C")
    }
    
    if (item == 4) {
        basic.showString("D")
    }
    
    if (item == 5) {
        basic.showString("E")
    }
    
    if (item == 6) {
        basic.showString("F")
    }
    
    if (item == 7) {
        basic.showString("G")
    }
    
    if (item == 8) {
        basic.showString("H")
    }
    
    if (item == 9) {
        basic.showString("I")
    }
    
    if (item == 10) {
        basic.showString("J")
    }
    
    if (item == 11) {
        basic.showString("K")
    }
    
    if (item == 12) {
        basic.showString("L")
    }
    
    if (item == 13) {
        basic.showString("M")
    }
    
    if (item == 14) {
        basic.showString("N")
    }
    
    if (item == 15) {
        basic.showString("O")
    }
    
    if (item == 16) {
        basic.showString("P")
    }
    
    if (item == 17) {
        basic.showString("Q")
    }
    
    if (item == 18) {
        basic.showString("R")
    }
    
    if (item == 19) {
        basic.showString("S")
    }
    
    if (item == 20) {
        basic.showString("T")
    }
    
    if (item == 21) {
        basic.showString("U")
    }
    
    if (item == 22) {
        basic.showString("V")
    }
    
    if (item == 23) {
        basic.showString("W")
    }
    
    if (item == 24) {
        basic.showString("X")
    }
    
    if (item == 25) {
        basic.showString("Y")
    }
    
    if (item == 26) {
        basic.showString("Z")
    }
    
})
basic.forever(function on_forever2() {
    
    if (item == 0) {
        item = 26
    }
    
    if (item == 27) {
        item = 1
    }
    
})
