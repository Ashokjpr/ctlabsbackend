import contactModel from '../models/Contact/contactModel.js'
import sendEmail from '../utils/sendEmail.js';

// CREATE Message data and send mail to admin
export const createMessage = async (req, res) => {
  try {
    const content = await contactModel.create(req.body);

    // Prepare email content
    const adminEmail = process.env.ADMIN_EMAIL;
    const subject = "New Contact Message Received";

  const html = `
  <div style="font-family: Arial, sans-serif; padding: 10px; background: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background: white; padding: 15px; border-radius: 8px;">

      <h2 style="color: #333; margin-bottom: 5px;">New Contact Message</h2>
      <p style="margin-top: 0;">You have received a new message from your website contact form:</p>

      <table style="width: 100%; border-collapse: collapse; margin-top: 15px; table-layout: fixed;">
        <tr>
          <td style="padding: 6px; font-weight: bold; width: 30%;">Name:</td>
          <td style="padding: 6px; word-break: break-word; white-space: normal;">
            ${req.body.firstName} ${req.body.lastName}
          </td>
        </tr>
        <tr>
          <td style="padding: 6px; font-weight: bold; width: 30%;">Email:</td>
          <td style="padding: 6px; word-break: break-word; white-space: normal;">
            ${req.body.email}
          </td>
        </tr>
        <tr>
          <td style="padding: 6px; font-weight: bold; width: 30%;">Contact No:</td>
          <td style="padding: 6px; word-break: break-word; white-space: normal;">
            ${req.body.phone}
          </td>
        </tr>
        <tr>
          <td style="padding: 6px; font-weight: bold; width: 30%;">Message:</td>
          <td style="padding: 6px; word-break: break-word; overflow-wrap: break-word;  width: 100%;">
            ${req.body.message}
          </td>
        </tr>
      </table>

      <p style="margin-top: 20px; font-size: 13px; color: #777;">
        This is an automated email. Please do not reply.
      </p>

    </div>
  </div>
`;



    // Send email to admin
    await sendEmail(adminEmail, subject, html);

    // Send *only one* final response
    res.status(201).json({
      success: true,
      message: "Message created & email sent successfully",
      data: content
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating message content",
      error: error.message
    });
  }
};


// GET Message data
export const getMessage = async (req, res) => {
  const data = await contactModel.find();
  res.json(data);
};
