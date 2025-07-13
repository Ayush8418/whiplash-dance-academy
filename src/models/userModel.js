import mongoose from "mongoose";

export const courseSchema = new mongoose.Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
  },
  expireDate: {
    type: Date,
    default: () => new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
  },
  id: Number,
  title: String,
  slug: String,
  description: String,
  price: Number,
  instructor: String,
  isFeatured: Boolean,
  image: String
});

const customerSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "enter username"],
    },
    email: {
        type: String,
        required: [true, "enter username"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "enter paswword"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdime: {
        type: Boolean,
        default: false
    },
    verifyToken : String,
    verifyTokenExpiry: Date,
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    courses: [courseSchema]
})

const Customer = mongoose.models.Customers || mongoose.model("Customers", customerSchema);
export default Customer;