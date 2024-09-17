import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

// POST route for contact form submission
router.post('/submit', async (req, res) => {
    const { name, email, message } = req.body;

    try {
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Please fill in all fields' });
          }

        // Save contact details to MongoDB
        const newContact = new Contact({
            name,
            email,
            message
        });
        await newContact.save();
 
        const transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587, 
            auth: {
                user: process.env.EMAIL_ID, 
                pass:  process.env.EMAIL_PASS    
            }
        });

        // Email options
        const mailOptions = {
            from: 'gokulgo53503@gmail.com' ,  
            to:email,                     
            subject: 'Contact Form Submission Confirmation',
            text: `Dear ${name},\n\nThank you for reaching out to us! We have received your message: "${message}". We will get back to you shortly.\n\nBest regards,`
        };

        // Send the email
        transporter.sendMail(mailOptions, (error, info) => {     
            if (error) {
                console.log('Error sending email:', error);
                return res.status(500).json({ error: 'Error sending email' });
            }
            console.log('Email sent:', info.response);
            res.status(201).json({ message: 'Contact details saved and confirmation email sent!' });
        });

    } catch (err) {
        console.error('Server error:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
