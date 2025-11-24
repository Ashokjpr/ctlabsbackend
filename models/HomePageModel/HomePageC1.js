import mongoose from "mongoose";

const homePageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  titledec: { type: String },
  subtitle: { type: String },
  subtitledec: {type: String},
},
  { timestamps: true },
);

export default mongoose.model("HomePageC1", homePageSchema);
