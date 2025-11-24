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
  const data = await allPagesCardModel.find({pagename});
  res.json(data);
  
};