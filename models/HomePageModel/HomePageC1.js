import mongoose from "mongoose";

const homePageSchema = new mongoose.Schema({
  pagename: { type: String, required: true },
  title: { type: String, required: true },
  titledec: { type: String },
  subtitle: { type: String },
  subtitledec: {type: String},
  desktopbg: { type: String },
  mobilebg: { type: String },
},
  { timestamps: true },
);

export default mongoose.model("HomePageC1", homePageSchema);
