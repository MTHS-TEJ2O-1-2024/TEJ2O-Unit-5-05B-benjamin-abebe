/**
 * Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe
 * Created on: Oct 2024
 * This program displays a traffic lights
 */

// variables
let neopixelStrip: neopixel.Strip = null
let lightLevel: number = 0

// clean up 
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Happy)
lightLevel = input.lightLevel()

// setting function for the button
input.onButtonPressed(Button.A, function () {

    // defining variables and showing happy face
    basic.showIcon(IconNames.Happy)
    lightLevel = input.lightLevel()

    neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()

    // if it is <= 51 light up 0 Neopixels
    if (lightLevel <= 51) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }

    // if it is > light up 1 Neopixels
    if (lightLevel > 52) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }

    // if it is > 104 light up 2 Neopixels
    if (lightLevel > 104) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }

    // if it is > 156 light up 3 Neopixels
    if (lightLevel > 156) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }

    if (lightLevel > 208) {
        neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
        neopixelStrip.show()
        basic.showIcon(IconNames.Happy)
    }
    pause(2000)
    neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
})