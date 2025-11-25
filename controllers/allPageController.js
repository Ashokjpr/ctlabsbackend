import allPagesTextModel from "../models/pages/allPagesTextModel.js";
import allPagesCardModel from "../models/pages/allPagesCardModel.js";

// CREATE Pagess text data
export const createAllPageData = async (req, res) => {
  try {
    const content = await allPagesTextModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Pagess content created successfully",
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating Pagess content",
      error: error.message
    });
  }
};

// GET pages text data
export const getallPageTextData = async (req, res) => {
  const { pagename } = req.params;
  const data = await allPagesTextModel.find({pagename});
  res.json(data);
};

// UPDATE Text Data
export const updateTextData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContent = await allPagesTextModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: "Text data not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Text data updated successfully",
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating Text data",
      error: error.message
    });
  }
};

  

// CREATE Pagess card data
export const createAllPageCardData = async (req, res) => {
  try {
    const content = await allPagesCardModel.create(req.body);
    res.status(201).json({
      success: true,
      message: "Pagess card content created successfully",
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating Pagess card content",
      error: error.message
    });
  }
};

// GET  pages card data
export const getPageCardData = async (req, res) => {
  const { pagename } = req.params;
  const data = await allPagesCardModel.find({pagename ,deleteitem:false});
  res.json(data);
  
};

// UPDATE Card Data
export const updateCardData = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContent = await allPagesCardModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: "Card data not found"
      });
    }
    res.status(200).json({
      success: true,
      message: "Card data updated successfully",
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating Card data",
      error: error.message
    });
  }
};


// Delete pages card  data
export const deleteCardData = async (req, res) => {
  try {
    const deleted = await allPagesCardModel.findByIdAndUpdate(
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