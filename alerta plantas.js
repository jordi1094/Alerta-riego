
//MAILER

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: 'tenemossedplantas@gmail.com',
      pass: 'hdqkmhkshbxsyeka'
    }
  });

// ----------------------------------------------------------


//input del sensor. si es 0(false) no pasa corrientet, la tierra esta seca. si es 1 (true) si pasa corriente la tierra esta humeda.

//al no tener el sensor simulamos el inputt generando booleanos aleatorios.


//prueva de varias plantas
var planta1 = false
var Planta2 = true
var planta3 = false
var planta4 = true

if (planta1 || planta2 || planta3 || planta4 === false){

const info = transporter.sendMail({
    from: '"Tenemos sed" <tenemossedplantas>', // sender address
    to: "jordi10111994@gmail.com", // list of receivers
    subject: "Tus plantas necesitasn agua", // Subject line
    text: "Tengo sed", // plain text body
    html: <p> las</p> , // html body
  });
}
// a partir de aqui funciona
/*
var humedad = false /*Boolean(Math.round(Math.random()));


if (humedad === false) {
    const info = transporter.sendMail({
        from: '"Tenemos sed" <tenemossedplantas>', // sender address
        to: "jordi10111994@gmail.com", // list of receivers
        subject: "Tus plantas necesitasn agua", // Subject line
        text: "Tengo sed 2", // plain text body
        html: "<b>rieganos 3</b>", // html body
      });
}
else{
    console.log('no hay que regar')
}
*/

