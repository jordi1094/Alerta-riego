const { read } = require("fs");

let Gpio;

if (process.env.SIMULAET ==="true"){
    Gpio = class {
        constructor(pin, direction){
            this.pin = pin;
            this.direction = direction;
            this.value = 0;
        }
    
        readSync() {
            console.log(`Simulated read on pin ${this.pin}: ${this.value}`)
            return this.value;
        }
    }
}  else {
    const { Gpio: realGpio } = await import('onoff');
    Gpio = realGpio;
  }
export default Gpio