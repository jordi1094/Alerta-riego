import Gpio from "../hardware/gpio";

function readSensor (pin){
    const sensor = new Gpio(pin, "in", "both");

    sensor.watch((err, value) => {
        if (err) {
            console.log(err.message)
        }
        return value
    })
}

export default readSensor