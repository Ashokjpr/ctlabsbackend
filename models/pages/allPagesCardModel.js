import mongoose from "mongoose";

const allPageCardSchema = new mongoose.Schema({
  pagename: { type: String, required: true, },
  title: { type: String, required: true },
  points: { type: [String] },
  
},
  { timestamps: true },
);

export default mongoose.model("allPagesCardModel", allPageCardSchema);
