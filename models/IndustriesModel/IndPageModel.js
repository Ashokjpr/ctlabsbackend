import mongoose from "mongoose";

const indPageSchema = new mongoose.Schema({
  pagename: { type: String, required: true, },
  title: { type: String, required: true },
  keytitle: { type: String, required: true },
  image : {type: String,},
  points: { type: [String] },
  deleteitem: {type: Boolean, default: false},
},
  { timestamps: true },
);

export default mongoose.model("IndPageModel", indPageSchema);
