
/**
 * 使用此文件来定义自定义函数和图形块。
 * 想了解更详细的信息，请前往 /blocks/custom
 */

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * 自定义图形块
 */
//% weight=100 color=#0fbc11 icon=""
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
     * TODO: Linear Move
     * @param x 在此处描述参数, eg: 10.0
     * @param y 在此处描述参数, eg: 15.0
     * @param z 在此处描述参数, eg: 5.0
     */
    //% block
    export function moveXYZ(x: number, y: number, z: number): void {
        // Add code here
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
     * TODO: Go to origin on all axes
     */
    //% block
    export function autoHome(): void {
        // Add code here
        state = 0
        // Serial port send command with carriage return( /n ).
        serial.writeLine("G28")
        while (state == 0) {
            basic.pause(1)
        }
    }
}
