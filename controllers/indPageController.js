import IndPageModel from "../models/IndustriesModel/IndPageModel.js";

// CREATE Industries pages data
export const createIndPageData = async (req, res) => {
  try {
    const content = await IndPageModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Industries content created successfully",
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating Industries content",
      error: error.message
    });
  }
};

// UPDATE Industries Data
export const updateIndPageData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContent = await IndPageModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: "Industries content not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Industries content updated successfully",
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating Industries content",
      error: error.message
    });
  }
};

// GET Industries pages data
export const getIndPageData = async (req, res) => {
  const data = await IndPageModel.find({deleteitem:false});
  res.json(data);
};

// Delete Industries pages data
export const deleteIndPageData = async (req, res) => {
  try {
    const deleted = await IndPageModel.findByIdAndUpdate(
      req.params.id,
      { deleteitem: true },
      { new: true }
    );

    if (!deleted)
      return res.status(404).json({ message: "Record not found" });

    res.json({ message: "Soft Deleted", deleted });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}