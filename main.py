def CHECKMODE():
    global 電流, MODE
    電流 = 0
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    if MODE == 1:
        レインボー点灯(True)
    elif MODE == 2:
        白流れ星(True)
    elif MODE == 3:
        虹色ウェーブ(True)
    elif MODE == 4:
        コメット(True)
    elif MODE == 5:
        赤ドクドク(True)
    else:
        MODE = 1
        CHECKMODE()

def on_button_pressed_a():
    basic.show_string("" + str((MODE)))
input.on_button_pressed(Button.A, on_button_pressed_a)

def コメット(flg: bool):
    global i, j
    if flg == True:
        strip.set_brightness(255)
        i = 0
        for index in range(5):
            j = 0
            for index2 in range(7):
                strip.set_pixel_color(i * 29 + j, neopixel.hsl(i * 72 + j * 10, 200, 25))
                j += 1
            i += 1
    elif flg == False:
        strip.rotate(-1)
        strip.show()
        電流値()
        basic.pause(10)
def 虹色ウェーブ(flg2: bool):
    global LEDNo, SIN, i, j, 明るさ
    if flg2 == True:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.set_brightness(240)
        LEDNo = 0
    elif flg2 == False:
        SIN = 120 * Math.sin(明るさ) + 120
        strip.set_brightness(SIN)
        i = 0
        for index3 in range(15):
            j = 0
            for index4 in range(1):
                strip.set_pixel_color(i * 10 + j, neopixel.hsl(i * 24 + j, 200, 20))
                j += 1
            i += 1
        strip.rotate(1)
        strip.show()
        電流値()
        明るさ += 0.2
        basic.pause(10)

def on_sound_loud():
    global MODE
    MODE += 1
    CHECKMODE()
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def レインボー点灯(flg3: bool):
    if flg3 == True:
        strip.set_brightness(80)
        strip.show_rainbow(1, 360)
        電流値()
    elif flg3 == False:
        strip.rotate(2)
        strip.show()
        電流値()
def 白流れ星(flg4: bool):
    global LEDNo, i
    if flg4 == True:
        strip.set_brightness(80)
        LEDNo = 0
    elif flg4 == False:
        LEDNo = randint(0, 143)
        strip.set_brightness(100)
        i = 0
        for index5 in range(20):
            strip.set_pixel_color(LEDNo, neopixel.colors(NeoPixelColors.WHITE))
            strip.rotate(1)
            strip.show()
            電流値()
            i += 1
            basic.pause(20)
        for index6 in range(20):
            strip.rotate(1)
            strip.show()
            電流値()
            basic.pause(20)
        i = 0
        for index7 in range(20):
            strip.set_pixel_color(LEDNo + (i + 20), neopixel.colors(NeoPixelColors.BLACK))
            strip.show()
            電流値()
            basic.pause(20)
            i += 1
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
def SHOWAURA():
    global MODE
    if MODE == 1:
        レインボー点灯(False)
    elif MODE == 2:
        白流れ星(False)
    elif MODE == 3:
        虹色ウェーブ(False)
    elif MODE == 4:
        コメット(False)
    elif MODE == 5:
        赤ドクドク(False)
    else:
        MODE = 1

def on_button_pressed_b():
    global MODE
    MODE = 1
    CHECKMODE()
input.on_button_pressed(Button.B, on_button_pressed_b)

def 電流値():
    global 電流
    if strip.power() >= 電流:
        電流 = strip.power()

def on_logo_pressed():
    basic.show_string("" + str((電流)))
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

def 赤ドクドク(flg5: bool):
    global 明るさ, SIN
    if flg5 == True:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.set_brightness(255)
        明るさ = 0
    elif flg5 == False:
        明るさ += 0.2
        SIN = 125 * Math.sin(明るさ) + 125
        strip.set_brightness(SIN)
        strip.show_color(neopixel.colors(NeoPixelColors.RED))
        電流値()
        basic.pause(40)
def レインボー切り替え(flg6: bool):
    global 色相
    if flg6 == True:
        strip.set_brightness(80)
        色相 = 0
    elif flg6 == False:
        色相 += 10
        strip.show_color(neopixel.hsl(色相, 200, 25))
        電流値()
        basic.pause(100)
        if 色相 >= 260:
            色相 = 0
色相 = 0
明るさ = 0
SIN = 0
LEDNo = 0
j = 0
i = 0
電流 = 0
MODE = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 150, NeoPixelMode.RGB)
music.set_volume(30)
soundExpression.happy.play()
MODE = 1
CHECKMODE()

def on_forever():
    SHOWAURA()
basic.forever(on_forever)
