
//MAILER

const nodemailer = require("nodemailer");

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
var humedad = false //Boolean(Math.round(Math.random()));
// a partir de aqui funciona
function sendMail(){
  if (humedad === false) {
      const info = transporter.sendMail({
          from: '"Tenemos sed" <tenemossedplantas>', // sender address
          to: "jordi10111994@gmail.com", // list of receivers
          subject: "Tus plantas necesitasn agua", // Subject line
          text: "Tengo sed 2", // plain text body
          html: "<b>rieganos 5</b>", // html body
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

  var A_Hora = 13;
  var A_minutos = 04;

  if (hora == A_Hora && minuto == A_minutos && segundo=="00"){
    sendMail();
  }
}
setInterval(Alarma,1000)
