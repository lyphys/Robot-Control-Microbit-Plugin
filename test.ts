// tests go here; this will not be compiled when this package is used as an extension.


basic.forever(function () {
    RobotControl.doArmAutoHome()
    basic.pause(1000)
    RobotControl.doArmMoveXYZ(0.0, 0.0, 0.0)
    basic.pause(5000)
    RobotControl.doArmMoveXYZ(50.0, 50.0, 60.0)
    basic.pause(5000)
    RobotControl.doArmMoveXYZ(100.0, 100.0, 30.0)
    basic.pause(5000)
    RobotControl.doArmMoveXYZ(200.0, 200.0, 90.0)
    basic.pause(5000)
})
