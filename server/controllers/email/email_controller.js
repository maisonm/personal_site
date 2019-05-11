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
const { EMAIL_PROVIDER } = process.env;

exports.get_test = (req, res) => {
  const { body } = req;
  const { emailFrom, subject, text } = body;

  let mail = {
    from: emailFrom,
    to: EMAIL_PROVIDER,
    subject,
    text
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
