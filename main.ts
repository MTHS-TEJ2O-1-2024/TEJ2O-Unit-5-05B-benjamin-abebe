/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Benjamin Abebe
 * Created on: Sep 2024
 * This program allows users to play rock,paper, sciscors
*/

let randomNumber: number = 0
let totalPoint: number = 0

totalPoint = 0
randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if the number is 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }

    // if the number is 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }

    // if the number is 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        pause(2000)
        basic.clearScreen()
        basic.showIcon(IconNames.Happy)
    }
})

input.onButtonPressed(Button.A, function () {
    totalPoint = totalPoint + 1
})

input.onButtonPressed(Button.B, function () {
    basic.showString("total Point is: ", totalPoint)
})