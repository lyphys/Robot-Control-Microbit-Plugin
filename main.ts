
namespace RobotControl {

    serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
        basic.showIcon(IconNames.Asleep)
        rev = serial.readString()
        if (rev.substr(0, 2) == "ok") {
            state = 1
            basic.showIcon(IconNames.Yes)
        } else {
            basic.showIcon(IconNames.No)
        }
    })

    let rev = ""
    let state = 0
    serial.redirect(
        SerialPin.P0,
        SerialPin.P1,
        BaudRate.BaudRate115200
    )
    basic.showIcon(IconNames.House)

    /**
     * Linear Move
    */
    export function doArmMoveXYZ(x = 0, y = 0, z = 0) {
        state = 0
        let x_str = x.toString()
        let y_str = y.toString()
        let z_str = z.toString()
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G0 X" + x_str + " Y" + y_str + " Z" + z_str + " F3000")
        while (state == 0) {
            basic.pause(1)
        }
    }

    /**
     * Go to origin on all axes
    */
    export function doArmAutoHome() {
        state = 0
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G28")
        while (state == 0) {
            basic.pause(1)
        }
    }
}

