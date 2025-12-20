import nodemailer from "nodemailer";
// console.log("ENV CHECK:", process.env.EMAIL_USER, process.env.EMAIL_PASS);


const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

    await transporter.sendMail({
      from: `"Custom Tech Labs" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });

    console.log("Admin Notification Sent!");
  } catch (error) {
    console.log("Email Error:", error);
  }
};

export default sendEmail;
