import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    id: { type: mongoose.Schema.Types.ObjectId },
    username: { type: String, required: true },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          // pelo menos 8 caracteres, uma letra maiúscula, uma letra minúscula e um número
          // return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);

          // Pelo menos 4 caracteres
          return /^.{4,}$/.test(value);
        },
        message: "invalid password",
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (value) {
          // user@example.com
          return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
        },
        message: "invalid e-mail",
      },
    },
    isAdmin: { type: Boolean, required: true },
    profileImage: { type: String, default: "" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});

const user = mongoose.model("Users", userSchema);

export default user;
