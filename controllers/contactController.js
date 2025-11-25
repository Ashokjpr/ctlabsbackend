import contactModel from '../models/Contact/contactModel.js'

// CREATE Message data
export const createMessage = async (req, res) => {
  try {
    const content = await contactModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Message created successfully",
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating Message content",
      error: error.message
    });
  }
};

// GET Message data
export const getMessage = async (req, res) => {
  const data = await contactModel.find();
  res.json(data);
};
