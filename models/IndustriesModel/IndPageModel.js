import mongoose from "mongoose";

const indPageSchema = new mongoose.Schema({
  pagename: { type: String, required: true, },
  title: { type: String, required: true },
  keytitle: { type: String, required: true },
  image : {type: String, required :true},
  points: { type: [String] },
},
  { timestamps: true },
);

export default mongoose.model("IndPageModel", indPageSchema);
