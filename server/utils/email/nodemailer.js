const mailer = require('nodemailer');

const { EMAIL_PROVIDER, EMAIL_PASS } = process.env;

exports.smtpTransport = mailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL_PROVIDER,
    pass: EMAIL_PASS
  }
});
