import mongoose from "mongoose";

const homePageSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    coreFeatures: {type: [String]},
    advancedModules: {type: [String]},
  },
  { timestamps: true }
);

export default mongoose.model("HomePageC2", homePageSchema);
