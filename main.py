def on_received_number(receivedNumber):
    if receivedNumber == 1:
        serial.write_line("A")
    if receivedNumber == 2:
        serial.write_line("B")
    if receivedNumber == 3:
        serial.write_line("C")
    if receivedNumber == 4:
        serial.write_line("D")
    if receivedNumber == 5:
        serial.write_line("E")
    if receivedNumber == 6:
        serial.write_line("F")
    if receivedNumber == 7:
        serial.write_line("G")
    if receivedNumber == 8:
        serial.write_line("H")
    if receivedNumber == 9:
        serial.write_line("I")
    if receivedNumber == 10:
        serial.write_line("J")
    if receivedNumber == 11:
        serial.write_line("K")
    if receivedNumber == 12:
        serial.write_line("L")
    if receivedNumber == 13:
        serial.write_line("M")
    if receivedNumber == 14:
        serial.write_line("N")
    if receivedNumber == 15:
        serial.write_line("O")
    if receivedNumber == 16:
        serial.write_line("P")
    if receivedNumber == 17:
        serial.write_line("Q")
    if receivedNumber == 18:
        serial.write_line("R")
    if receivedNumber == 19:
        serial.write_line("S")
    if receivedNumber == 20:
        serial.write_line("T")
    if receivedNumber == 21:
        serial.write_line("U")
    if receivedNumber == 22:
        serial.write_line("V")
    if receivedNumber == 23:
        serial.write_line("W")
    if receivedNumber == 24:
        serial.write_line("X")
    if receivedNumber == 25:
        serial.write_line("Y")
    if receivedNumber == 26:
        serial.write_line("Z")
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global item
    item = item - 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    radio.send_number(item)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global item
    item = item + 1
input.on_button_pressed(Button.B, on_button_pressed_b)

item = 0
radio.set_group(1)

def on_forever():
    if item == 1:
        basic.show_string("A")
    if item == 2:
        basic.show_string("B")
    if item == 3:
        basic.show_string("C")
    if item == 4:
        basic.show_string("D")
    if item == 5:
        basic.show_string("E")
    if item == 6:
        basic.show_string("F")
    if item == 7:
        basic.show_string("G")
    if item == 8:
        basic.show_string("H")
    if item == 9:
        basic.show_string("I")
    if item == 10:
        basic.show_string("J")
    if item == 11:
        basic.show_string("K")
    if item == 12:
        basic.show_string("L")
    if item == 13:
        basic.show_string("M")
    if item == 14:
        basic.show_string("N")
    if item == 15:
        basic.show_string("O")
    if item == 16:
        basic.show_string("P")
    if item == 17:
        basic.show_string("Q")
    if item == 18:
        basic.show_string("R")
    if item == 19:
        basic.show_string("S")
    if item == 20:
        basic.show_string("T")
    if item == 21:
        basic.show_string("U")
    if item == 22:
        basic.show_string("V")
    if item == 23:
        basic.show_string("W")
    if item == 24:
        basic.show_string("X")
    if item == 25:
        basic.show_string("Y")
    if item == 26:
        basic.show_string("Z")
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)
