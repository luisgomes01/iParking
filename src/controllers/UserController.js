import User from "../model/UserModel.js";
import bcrypt from "bcryptjs"

class UserController {
  async createUser(req, res) {
    const {
      name,
      phone,
      cpf,
      email,
      password,
      plate,
      type,
      model,
      brand,
      cardNumber,
      nameInCard,
      validThru,
      cvv,
    } = req.body;

    const encryptedPassword = await bcrypt.hash(password, 10);

    let user = await User.findOne({ email, cpf });
    if (user)
      return res.status(400).json({ message: "Email and cpf must be unique." });

    user = await User.create({
      name,
      phone,
      cpf,
      email: email.toLowerCase(),
      password: encryptedPassword,
      plate,
      type,
      model,
      brand,
      cardNumber,
      nameInCard,
      validThru,
      cvv,
    }) 

    return res.json({id: user._id, name: user.name, email: user.email});
  }

  async getUsers(req, res) {
    const user = await User.find()
    return res.json(user)
  }

  async deleteOneUser (req, res) {
    const {email} = req.body
    const user = await User.findOneAndDelete({email})

    if(!user) {
      return res.status(400).json({message: "There's no such email registered."})
    }

    return res.json(user)
  }

  async deleteUsers(req, res) {
    const user = await User.deleteMany()
    return res.json(user)
  }
}

export default new UserController()