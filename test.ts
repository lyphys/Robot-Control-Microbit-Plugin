// tests go here; this will not be compiled when this package is used as an extension.

basic.forever(function () {
    RobotControl.autoHome()
    basic.pause(1000)
    RobotControl.moveXYZ(0, 0, 0)
    basic.pause(5000)
    RobotControl.moveXYZ(50, 50, 60)
    basic.pause(5000)
    RobotControl.moveXYZ(100, 100, 30)
    basic.pause(5000)
    RobotControl.moveXYZ(200, 200, 90)
    basic.pause(5000)
})
