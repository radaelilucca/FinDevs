import bcrypt from 'bcryptjs';

export default function checkPassword(password, password_hash) {
  return bcrypt.compare(password, password_hash);
}
