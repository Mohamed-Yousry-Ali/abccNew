import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com", // Replace with your Gmail address
    pass: "your-email-password", // Replace with your Gmail password or App Password
  },
});

export const sendEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const mailOptions = {
    from: email,
    to: "mmohamedaali1995@gmail.com", // Replace with the recipient's email address
    subject: `Contact Form Message from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
