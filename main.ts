let grados = 0
basic.showString("Hello!")
basic.forever(function () {
    grados = input.compassHeading()
    if (grados < 45) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (grados < 90) {
        basic.showArrow(ArrowNames.West)
    } else if (grados < 135) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (grados < 180) {
        basic.showArrow(ArrowNames.South)
    } else if (grados < 225) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (grados < 270) {
        basic.showArrow(ArrowNames.East)
    } else if (grados < 315) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (grados < 360) {
        basic.showArrow(ArrowNames.NorthWest)
    } else {
        basic.showArrow(ArrowNames.North)
    }
})
