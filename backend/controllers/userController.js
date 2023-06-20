import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// @desc    Login user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      gender: user.gender,
      dob: user.dob,
      organisation: user.organisation,
      contact: user.contact,
      isAdmin: user.isAdmin,
      isverified: user.isVerified,
      isGod: user.isGod,
      isAdmin: user.isAdmin,
      isEditor: user.isEditor,
      isMember: user.isMember,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc    Register user
// @route   POST /api/users/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, gender, dob, organisation, contact } =
    req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  console.log(
    name,
    email,
    password,
    gender,
    dob,
    organisation,
    contact,
    isVerified,
    isGod,
    isAdmin,
    isEditor,
    isMember
  );

  const user = await User.create({
    name,
    email,
    password,
    gender,
    dob,
    organisation,
    contact,
    isVerified,
    isGod,
    isAdmin,
    isEditor,
    isMember,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      gender: user.gender,
      dob: user.dob,
      organisation: user.organisation,
      contact: user.contact,
      isVerified: user.isVerified,
      isGod: user.isGod,
      isAdmin: user.isAdmin,
      isEditor: user.isEditor,
      isMember: user.isMember,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Logout
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Get users
// @route   GET /api/users/
// @access  Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Delete user by id
// @route   DELETE /api/users/:id
// @access  Private/Admin
const deleteUserById = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Update user by id
// @route   PUT /api/users/:id
// @access  Private/Admin
const updateUserById = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Register Admin User
// @route   POST /api/users/admin
// @access  Private/God

// @desc    Update Admin User
// @route   PUT /api/users/admin
// @access  Private/God

// @desc    Delete Admin User
// @route   DELETE /api/users/admin
// @access  Private/God

// @desc    Get admin users
// @route   GET /api/users/admins
// @access  Private/Admin

// @desc    Get editor users
// @route   GET /api/users/editors
// @access  Private/Admin

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById,
};
