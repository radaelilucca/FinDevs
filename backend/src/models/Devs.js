import mongoose from 'mongoose';
import PointSchema from './utils/PointSchema';

const DevSchema = new mongoose.Schema({
  name: String,
  github_user: String,
  password_hash: String,
  admin: {
    type: Boolean,
    default: false,
  },
  bio: String,
  avatar_url: String,
  techs: {
    type: [String],
    uppercase: true,
  },
  location: {
    type: PointSchema,
    index: '2dsphere',
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Dev', DevSchema);
