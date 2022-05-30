import UserModel from "../model/UserModel.js"
import bcrypt from "bcryptjs"
import { JWT_SIGN_IN_KEY } from "../config.js"
import jwt from "jsonwebtoken"

class LoginController {
  async signIn(req, res) {
    const {email, password} = req.body
    const user = UserModel.findOne({email})

    if (!user) return res.status(404).json({message: "Email not found"})

    const isPasswordEqual = bcrypt.compare(password, user.password)
    if (!isPasswordEqual) return res.status(400).json({message: "Incorrect password"})

    const token = jwt.sign(
      { user_id: email },
      JWT_SIGN_IN_KEY,
      {
        expiresIn: "24h",
      }
    );

    return res.json({token})
  }
}

export default new LoginController()