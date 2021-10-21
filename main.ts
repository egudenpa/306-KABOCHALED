function CHECKMODE() {
    
    電流 = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    if (MODE == 1) {
        レインボー点灯(true)
    } else if (MODE == 2) {
        白流れ星(true)
    } else if (MODE == 3) {
        虹色ウェーブ(true)
    } else if (MODE == 4) {
        コメット(true)
    } else if (MODE == 5) {
        赤ドクドク(true)
    } else {
        MODE = 1
        CHECKMODE()
    }
    
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    basic.showString("" + ("" + MODE))
})
function コメット(flg: boolean) {
    
    if (flg == true) {
        strip.setBrightness(255)
        i = 0
        for (let index = 0; index < 5; index++) {
            j = 0
            for (let index2 = 0; index2 < 7; index2++) {
                strip.setPixelColor(i * 29 + j, neopixel.hsl(i * 72 + j * 10, 200, 25))
                j += 1
            }
            i += 1
        }
    } else if (flg == false) {
        strip.rotate(-1)
        strip.show()
        電流値()
        basic.pause(10)
    }
    
}

function 虹色ウェーブ(flg2: boolean) {
    
    if (flg2 == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(240)
        LEDNo = 0
    } else if (flg2 == false) {
        SIN = 120 * Math.sin(明るさ) + 120
        strip.setBrightness(SIN)
        i = 0
        for (let index3 = 0; index3 < 15; index3++) {
            j = 0
            for (let index4 = 0; index4 < 1; index4++) {
                strip.setPixelColor(i * 10 + j, neopixel.hsl(i * 24 + j, 200, 20))
                j += 1
            }
            i += 1
        }
        strip.rotate(1)
        strip.show()
        電流値()
        明るさ += 0.2
        basic.pause(10)
    }
    
}

input.onSound(DetectedSound.Loud, function on_sound_loud() {
    
    MODE += 1
    CHECKMODE()
})
function レインボー点灯(flg3: boolean) {
    if (flg3 == true) {
        strip.setBrightness(80)
        strip.showRainbow(1, 360)
        電流値()
    } else if (flg3 == false) {
        strip.rotate(2)
        strip.show()
        電流値()
    }
    
}

function 白流れ星(flg4: boolean) {
    
    if (flg4 == true) {
        strip.setBrightness(80)
        LEDNo = 0
    } else if (flg4 == false) {
        LEDNo = randint(0, 143)
        strip.setBrightness(100)
        i = 0
        for (let index5 = 0; index5 < 20; index5++) {
            strip.setPixelColor(LEDNo, neopixel.colors(NeoPixelColors.White))
            strip.rotate(1)
            strip.show()
            電流値()
            i += 1
            basic.pause(20)
        }
        for (let index6 = 0; index6 < 20; index6++) {
            strip.rotate(1)
            strip.show()
            電流値()
            basic.pause(20)
        }
        i = 0
        for (let index7 = 0; index7 < 20; index7++) {
            strip.setPixelColor(LEDNo + (i + 20), neopixel.colors(NeoPixelColors.Black))
            strip.show()
            電流値()
            basic.pause(20)
            i += 1
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    
}

function SHOWAURA() {
    
    if (MODE == 1) {
        レインボー点灯(false)
    } else if (MODE == 2) {
        白流れ星(false)
    } else if (MODE == 3) {
        虹色ウェーブ(false)
    } else if (MODE == 4) {
        コメット(false)
    } else if (MODE == 5) {
        赤ドクドク(false)
    } else {
        MODE = 1
    }
    
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    MODE = 1
    CHECKMODE()
})
function 電流値() {
    
    if (strip.power() >= 電流) {
        電流 = strip.power()
    }
    
}

input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    basic.showString("" + ("" + 電流))
})
function 赤ドクドク(flg5: boolean) {
    
    if (flg5 == true) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.setBrightness(255)
        明るさ = 0
    } else if (flg5 == false) {
        明るさ += 0.2
        SIN = 125 * Math.sin(明るさ) + 125
        strip.setBrightness(SIN)
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        電流値()
        basic.pause(40)
    }
    
}

function レインボー切り替え(flg6: boolean) {
    
    if (flg6 == true) {
        strip.setBrightness(80)
        色相 = 0
    } else if (flg6 == false) {
        色相 += 10
        strip.showColor(neopixel.hsl(色相, 200, 25))
        電流値()
        basic.pause(100)
        if (色相 >= 260) {
            色相 = 0
        }
        
    }
    
}

let 色相 = 0
let 明るさ = 0
let SIN = 0
let LEDNo = 0
let j = 0
let i = 0
let 電流 = 0
let MODE = 0
let strip : neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 150, NeoPixelMode.RGB)
music.setVolume(30)
soundExpression.happy.play()
MODE = 1
CHECKMODE()
basic.forever(function on_forever() {
    SHOWAURA()
})
