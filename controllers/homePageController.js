import HomePageC1 from "../models/HomePageModel/HomePageC1.js";
import HomePageC2 from "../models/HomePageModel/HomePageC2.js";


// CREATE HomeC1 pages data
export const createC1PageData = async (req, res) => {
  try {
    const content = await HomePageC1.create(req.body);
    res.status(201).json({
      success: true,
      message: "Homepage content created successfully",
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating homepage content",
      error: error.message
    });
  }
};


// UPDATE HomeC1 Data

export const updateC1PageData = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedContent = await HomePageC1.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: "Homepage C1 content not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Homepage C1 content updated successfully",
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating homepage C1 content",
      error: error.message
    });
  }
};



// GET HomeC1 pages data
export const getC1PageData = async (req, res) => {
  const data = await HomePageC1.find();
  res.json(data);
};




// CREATE HomeC2 pages data
export const createC2PageData = async (req, res) => {
  try {
    const content = await HomePageC2.create(req.body);
    res.status(201).json({
      success: true,
      message: "Homepage C2 content created successfully",
      data: content
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating homepage C2 content",
      error: error.message
    });
  }
};

// Update Home C2 page
export const updateC2PageData = async (req, res) => {
  try {
    const { id } = req.params;

    const updatedContent = await HomePageC2.findByIdAndUpdate(
      id,
      req.body,
      { new: true } // return updated document
    );

    if (!updatedContent) {
      return res.status(404).json({
        success: false,
        message: "Homepage C2 content not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Homepage C2 content updated successfully",
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating homepage C2 content",
      error: error.message
    });
  }
};

// GET HomeC2 pages data
export const getC2PageData = async (req, res) => {
  const data = await HomePageC2.find();
  res.json(data);
};
