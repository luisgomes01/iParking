import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: String,
  phone: String,
  cpf: String,
  email: String,
  password: String,
  plate: String,
  type: String,
  model: String,
  brand: String,
  cardNumber: String,
  nameInCard: String,
  validThru: String,
  cvv: String,
})

export default mongoose.model('User', UserSchema)