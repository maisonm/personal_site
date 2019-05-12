const mailer = require('nodemailer');

//Email Transport
const { nodemailer } = require('../../utils/index');
const { smtpTransport } = nodemailer;

//Constants
const errors = require('../../utils/constants/index').error_constants;
const success = require('../../utils/constants/index').success_constants;
const { nodemailer_error } = errors;
const { nodemailer_success } = success;
//Enviroment Variables
const { EMAIL_USER, EMAIL_ALIAS } = process.env;

exports.get_test = (req, res) => {
  const { body } = req;
  const { subject, email, number, text, name } = body;

  //HTML Email body
  const emailBody = `${text} <br><br>Name: ${name} <br> Email: ${email} <br>Phone: ${number}`;

  let mail = {
    from: EMAIL_ALIAS,
    to: EMAIL_USER,
    subject,
    html: emailBody
  };

  smtpTransport.sendMail(mail, err => {
    if (err) {
      let errorMessage = {};
      errorMessage.message = nodemailer_error;
      errorMessage.error = err;
      return res.status(500).send(errorMessage);
    } else {
      return res.status(200).send(nodemailer_success);
    }
  });
};
