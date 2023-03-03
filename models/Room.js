import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      // required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: String, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);


// roomNumbers: [{ number: String, unavailableDates: {type: [Date]}}],

// price: {
//   type: Number,
//   // required: true,
// },