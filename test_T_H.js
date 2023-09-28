let Gpio = require('onoff').Gpio;

let button_5 = new Gpio(6, 'in', 'both');

temp_value = button_5.readSync()

console.log(temp_value)