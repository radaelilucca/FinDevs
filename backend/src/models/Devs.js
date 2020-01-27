import mongoose from 'mongoose'
import PointSchema from './utils/PointSchema'

const DevSchema = new mongoose.Schema({
  name: String,
  github_user: String,
  password: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  },
  active: {
    type: Boolean,
    default: true
  }
})

export default mongoose.model('Dev', DevSchema)