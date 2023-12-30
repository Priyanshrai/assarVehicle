import nodemailer from 'nodemailer';

function sendMail(email,password)
{
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ankitsharma97139@gmail.com',
    pass: 'dezxijmnvewraeek'
  }
});

var mailOptions = {
  from: 'ankitsharma97139@gmail.com',
  to: email,
  subject: 'Verification Email RoomRent.com',
  html: "<h1>Welcome to RoomRent.com</h1><p>you have successfully registered to our site , your login credentials are attached below</p><h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h2>Click on the link below to verify</h2>http://localhost:3000/verifyuser/"+email
};

transporter.sendMail(mailOptions,(error, info)=>{
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
});

}

export default sendMail;