const mailer = require('nodemailer');

const { EMAIL_USER, EMAIL_PASS, EMAIL_HOST, EMAIL_PORT } = process.env;

exports.smtpTransport = mailer.createTransport({
  host: EMAIL_HOST,
  port: EMAIL_PORT,
  secure: true,
  auth: {
    user: EMAIL_USER, // your domain email address
    pass: EMAIL_PASS // your password
  },
  logger: true
});
