let Gpio = require('onoff').Gpio;
//MAILER

const nodemailer = require("nodemailer");
const { Script } = require("vm");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'tenemossedplantas@gmail.com',
      pass: 'hawdpqeqqswmukom'
    }
  });

// ----------------------------------------------------------


//input del sensor. si es 1 no pasa corrientet, la tierra esta seca. si es 0 si pasa corriente la tierra esta humeda.



//lector sensor
//planta 1
let button_1 = new Gpio(2, 'in', 'both');

plant_1_value = button_1.readSync()

//planta 2
let button_2 = new Gpio(10,'in','both');

plant_2_value = button_2.readSync()


//------------------------------------------------------------------------

//Creación del array
var Plantas = ["Las plantas que necesitan agua son: "];

if (plant_1_value === 1) {
    Plantas.push("planta 1 ")
}

if (plant_2_value === 1) {
    Plantas.push("planta 2 ")
}
/*
if (plant_3 === false) {
    Plantas.push("planta 3 ")
}
if (plant_4 === false) {
    Plantas.push("planta 4 ")
}
if (plant_5 === false) {
  Plantas.push("planta 5 ")
}
if (plant_6 === false) {
  Plantas.push("planta 6 ")
}
if (plant_7 === false) {
  Plantas.push("planta 7 ")
}
if (plant_8 === false) {
  Plantas.push("planta 8 ")
}
*/
//transformar array a sring
let texto = Plantas.toString();

// Envio de email
function sendMail(){
  if (plant_1_value === 1 || plant_2_value === 1 /*|| plant_3=== false || plant_4=== false || plant_5 === false || plant_6===false || plant_7=== false || plant_8=== false*/ ) {
      const info = transporter.sendMail({
          from: '"Tenemos sed" <tenemossedplantas>', // sender address
          to: "jordi10111994@gmail.com", // list of receivers
          subject: "Tus plantas necesitan agua", // Subject line
          text: Plantas.toString(), // plain text body
          html: Plantas.toString(),// html body
        });
  }
  else{
    const info = transporter.sendMail({
      from: '"No tenemos sed" <tenemossedplantas>', // sender address
      to: "jordi10111994@gmail.com", // list of receivers
      subject: "Tus plantas estan perfectas", // Subject line
      text: "Todas las plantas estan regadas", // plain text body
      html: "Todas las plantas estan regadas /n ¡Gracias!",// html body
    });
  }
}




//activación por hora 
function Alarma(){
  var hoy = new Date() ;
  var hora = hoy.getHours();
  var minuto = hoy.getMinutes();
  var segundo = hoy.getSeconds();

  if (minuto < 10){
    minuto = "0" + minuto
  }

  if(segundo < 10){
    segundo = "0" + segundo
  }

  var A_Hora = 20;
  var A_minutos = 00;

  if (hora == A_Hora && minuto == A_minutos && segundo=="00"){
    sendMail();
  }
  var Plantas =[] 
}
setInterval(Alarma,1000)

