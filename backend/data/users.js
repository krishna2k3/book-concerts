import bcrypt from "bcryptjs";

const users = [
  {
    name: 'The God',
    email: 'god@email.com',
    password: bcrypt.hashSync("12345678", 10),
    gender: "male",
    dob: '2003-03-23',
    organisation: "God Club",
    contact: 1234567890,
    isVerified: false,
    isGod: true,
    isAdmin: true,
    isEditor: true,
    isMember: true,
  },
  {
    name: "The Admin",
    email: "admin@email.com",
    password: bcrypt.hashSync("12345678", 10),
    gender: "male",
    dob: '2003-03-23',
    organisation: "Ariana Fan Club",
    contact: 1234567891,
    isVerified: false,
    isGod: false,
    isAdmin: true,
    isEditor: true,
    isMember: true,
  },
  {
    name: "Normie",
    email: "normie@email.com",
    password: bcrypt.hashSync("12345678", 10),
    gender: "male",
    dob: '2002-11-11',
    organisation: "General",
    contact: 1234567892,
    isVerified: false,
    isGod: false,
    isAdmin: false,
    isEditor: false,
    isMember: false,
  },
  {
    name: "Better Simp",
    email: "bettersimp@email.com",
    password: bcrypt.hashSync("12345678", 10),
    gender: "male",
    dob: '2003-03-23',
    organisation: "Ariana Fan Club",
    contact: 1234567894,
    isVerified: false,
    isGod: false,
    isAdmin: false,
    isEditor: true,
    isMember: true,
  },
  {
    name: "Simp",
    email: "simp@email.com",
    password: bcrypt.hashSync("12345678", 10),
    gender: "male",
    dob: "2002-04-06",
    organisation: "Ariana Fan Club",
    contact: 1234567893,
    isVerified: false,
    isGod: false,
    isAdmin: false,
    isEditor: false,
    isMember: true,
  },
];

export default users;
