import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import Contact from "../models/contactModel";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(bodyParser.json());

function sendEmailCopy(data: any) {
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });
  const mailOptions = {
    from: process.env.FROM,
    to: process.env.TO,
    subject: "Contact Form Submission",
    text: JSON.stringify(data),
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

export async function postContact(req: express.Request, res: express.Response) {
  const { name, phone_no, email, message } = req.body;
  if (!name || !phone_no || !email || !message) {
    return res
      .status(400)
      .json({ error: "Invalid request or missing required fields." });
  }

  // Storing the data in the MongoDB
  const newContact = new Contact({
    name,
    phone_no,
    email,
    message,
  });

  try {
    await newContact.save();

    sendEmailCopy(req.body);

    return res
      .status(201)
      .json({ message: "Contact entry created successfully." });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Internal server error." });
  }
}
