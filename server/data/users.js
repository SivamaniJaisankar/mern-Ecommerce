import bcrypt from "bcryptjs";

const users = [
  {
    name: "Developer 101",
    email: "dev101@givmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Developer 102",
    email: "dev102@givmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Admin",
    email: "admin@givmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
];


export default users;