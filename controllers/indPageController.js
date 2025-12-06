import IndPageModel from "../models/IndustriesModel/IndPageModel.js";

// CREATE Industries pages data
export const createIndPageData = async (req, res) => {
  const {pagename, title, keytitle, points }= req.body
  try {
    const image = req.file.path;
    if (!image) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    } 

    const content = await IndPageModel.create({pagename, title, keytitle, points, image});
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


// Update images
export const updateImages = async (req, res) => {
  const { id } = req.params;
  const { name, pagename } = req.body;
  // console.log(id)
  // console.log(req.body)

  try {
    const image = req.file.path;

    if (!image) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }
    // HOME PAGE CASE
       const  updatedImg = await IndPageModel.findByIdAndUpdate(
          id,
          { image: image },
          { new: true }
        ); 
    
    // Not found
    if (!updatedImg) {
      return res.status(404).json({
        success: false,
        message: "Image card not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Image updated successfully",
      data: updatedImg,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating image",
      error: error.message,
    });
  }
};
