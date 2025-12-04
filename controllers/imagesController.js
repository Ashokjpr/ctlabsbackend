import allPagesTextModel from "../models/pages/allPagesTextModel.js";
import HomePageC1 from "../models/HomePageModel/HomePageC1.js";

export const updateImages = async (req, res) => {
  const { id } = req.params;
  const { name, pagename } = req.body;
  console.log(id)
  console.log(req.body)
  console.log("FILE:", req.file);

  try {
    const imageUrl = req.file ? req.file.path : null;   // Cloudinary secure URL

    if (!imageUrl) {
      return res.status(400).json({ success: false, message: "No image uploaded" });
    }

    let updatedImg;

    // HOME PAGE CASE
    if (pagename === "Home") {

      if (name === "Mobile") {
        updatedImg = await HomePageC1.findByIdAndUpdate(
          id,
          { mobilebg: imageUrl },
          { new: true }
        );
      } else {
        updatedImg = await HomePageC1.findByIdAndUpdate(
          id,
          { desktopbg: imageUrl },
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
          { mobilebg: imageUrl },
          { new: true }
        );
      } else {
        updatedImg = await allPagesTextModel.findByIdAndUpdate(
          id,
          { desktopbg: imageUrl },
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
      message: "Image uploaded to Cloudinary & saved in MongoDB",
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
