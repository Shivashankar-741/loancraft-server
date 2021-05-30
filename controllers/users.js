import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/user.js';

export const signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) return res.status(404).json({ message: 'User does not exist' });
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) return res.status(404).json({ message: 'Password not matching' });
    const token = jwt.sign({ email: existingUser.email, id: existingUser.id }, 'test', {
      expiresIn: '1h',
    });
    console.log({ result: existingUser, token });
    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'some thing went wrong' });
  }
};
export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;
  console.log(req.body);

  try {
    const existingUser = await User.findOne({ email });
    console.log(existingUser);
    if (existingUser)
      return res.status(400).json({ message: 'Sorry, User already exist with the email' });

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password don't match" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });
    console.log(result);
    const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: '1h' });
    console.log(token);
    console.log({ result, token });
    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'some thing went wrong' });
  }
};
