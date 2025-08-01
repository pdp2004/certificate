import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

// Get All Users
export const getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Register New User
export const postUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const user = new User({ name:name.slice(0,1).toUpperCase()+name.slice(1,name.length), email, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Login User
export const login = async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password)
    return res.status(400).json({ message: "Email and password are required" });

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "Invalid credentials" });

    // Check password match
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, name: user.name, email: user.email } });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }

};


export const auth = async (req,res)=>{
    const authHeader = req.headers.authorization;
    

    if(!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ msg: "No token provider"});
    }

    try{
      const token = authHeader.split(' ')[1];
      
      const decoded = jwt.verify(token,process.env.JWT_SECRET);
      const user = await User.findById(decoded.id);
      res.json({msg:'protected data',id:user._id,name:user.name,email:user.email});
    }
    catch(err){
      return res.status(403).json({msg:"Invalid token"})
    }
  }