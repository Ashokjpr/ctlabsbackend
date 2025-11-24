import mongoose from "mongoose";

const allPageSchema = new mongoose.Schema({
  pagename: { type: String, required: true, },
  title: { type: String, required: true },
  titledec: { type: String },
  subtitle: { type: String },
},
  { timestamps: true },
);

export default mongoose.model("allPagesTextModel", allPageSchema);
