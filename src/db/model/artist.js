import mongoose from 'mongoose'

const Artist = new mongoose.Schema({
  name: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true
  },
  createdAt: { type: Date, default: Date.now }
})

export default mongoose.model('artist', Artist)