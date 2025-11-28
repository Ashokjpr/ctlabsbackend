import allPagesTextModel from "../models/pages/allPagesTextModel.js";
import HomePageC1 from "../models/HomePageModel/HomePageC1.js";

export const updateImages = async (req, res) => {
  const { id } = req.params;
  const { name, pagename } = req.body;
  // console.log(id)
  // console.log(req.body)

  try {
    // const imagePath = req.file ? req.file.filename : null;
    const imagePath = "/uploads/images/" + req.file.filename;

    if (!imagePath) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    let updatedImg;

    // HOME PAGE CASE
    if (pagename === "Home") {

      if (name === "Mobile") {
        updatedImg = await HomePageC1.findByIdAndUpdate(
          id,
          { mobilebg: imagePath },
          { new: true }
        );
      } else {
        updatedImg = await HomePageC1.findByIdAndUpdate(
          id,
          { desktopbg: imagePath },
          { new: true }
        );
      }
    } 
    
    // OTHER PAGE CASE
    else {
      // console.log(pagename)
      if (name === "Mobile") {
        updatedImg = await allPagesTextModel.findByIdAndUpdate(
          id,
          { mobilebg: imagePath },
          { new: true }
        );
      } else {
        updatedImg = await allPagesTextModel.findByIdAndUpdate(
          id,
          { desktopbg: imagePath },
          { new: true }
        );
      }

    }

    // Not found
    if (!updatedImg) {
      return res.status(404).json({
        success: false,
        message: "Document not found",
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
