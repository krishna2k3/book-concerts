import asyncHandler from "../middleware/asyncHandler.js";
import users from "../data/users.js";

// @desc    Login user & get token
// @route   POST /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Register user
// @route   POST /api/users/
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  res.send("Login User");
});

// @desc    Logout
// @route   POST /api/users/logout
// @access  Public
const logoutUser = asyncHandler(async (req, res) => {
  res.send("Login User");
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
