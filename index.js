
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


//input del sensor. si es 0(false) no pasa corrientet, la tierra esta seca. si es 1 (true) si pasa corriente la tierra esta humeda.

//al no tener el sensor simulamos el inputt generando booleanos aleatorios.
//Boolean(Math.round(Math.random()));


var plant_1 = new Gpio(2, 'in', 'both');
/*var plant_2 = Boolean(Math.round(Math.random()));
var plant_3 = Boolean(Math.round(Math.random()));
var plant_4 = Boolean(Math.round(Math.random()));
var plant_5 = Boolean(Math.round(Math.random()));
var plant_6 = Boolean(Math.round(Math.random()));
var plant_7 = Boolean(Math.round(Math.random()));
var plant_8 = Boolean(Math.round(Math.random()));*/

//lector sensor
let Gpio = require('onoff').Gpio;
let button = new Gpio(2, 'in', 'both');
setInterval(()=>{
var value = button.readSync()
  console.log(value);
},4000);
plan_1_value = button.readSync()
//Creación del array
var Plantas = ["Las plantas que necesitan agua son:",];

if (plant_1_value === 1) {
    Plantas.push("planta 1 ")
}
/*
if (plant_2 === false) {
    Plantas.push("planta 2 ")
}
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
  if (plant_1 === 1 /*|| plant_2===false || plant_3=== false || plant_4=== false || plant_5 === false || plant_6===false || plant_7=== false || plant_8=== false*/ ) {
      const info = transporter.sendMail({
          from: '"Tenemos sed" <tenemossedplantas>', // sender address
          to: "jordi10111994@gmail.com", // list of receivers
          subject: "Tus plantas necesitan agua", // Subject line
          text: Plantas.toString(), // plain text body
          html: Plantas.toString(),// html body
        });
  }
  else{
      console.log('no hay que regar');
  }
};



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

  var A_Hora = 21;
  var A_minutos = 52;

  if (hora == A_Hora && minuto == A_minutos && segundo=="00"){
    sendMail();
  }
  var Plantas =[] 
}
setInterval(Alarma,1000)

