import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String },
    email: { type: String, required: true, },
    phone: { type: String, required: true },
    company: { type: String },
    message: { type: String, required: true },
    updates: { type: Boolean, default: false }, // newsletter updates
    agree: { type: Boolean, required: true },   // terms & conditions approval
  },
  { timestamps: true }
);

export default mongoose.model("ContactModel", contactSchema);
