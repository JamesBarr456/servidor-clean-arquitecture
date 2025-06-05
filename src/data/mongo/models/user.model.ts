import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [ true, 'Email is required' ],
    unique: true,
  },
   emailValidated: {
    type: Boolean,
    default: false,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  avatar: {
    type: String,
    default: "",
  },
  role: {
    type: [String],
    default: ['USER_ROLE'],
    enum: ['ADMIN_ROLE','USER_ROLE']
  }
  ,
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.pre("save", async function (next) {
//   try {
//     const hashedPassword = await bcrypt.hash(this.password ?? "", 10);
//     this.password = hashedPassword;
//     next();
//   } catch (error) {
//     console.log(error);
//   }
// });
export const UserModel = mongoose.model("User", userSchema);