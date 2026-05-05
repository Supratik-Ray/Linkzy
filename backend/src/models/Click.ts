import mongoose, { Schema } from "mongoose";

const clickSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    device: {
      type: String,
      required: true,
    },
    link: {
      type: Schema.Types.ObjectId,
      ref: "Link",
    },
  },
  {
    timestamps: true,
  },
);

const Click = mongoose.model("CLick", clickSchema);

export default Click;
