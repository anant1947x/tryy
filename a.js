const fs = require("fs");

const file = "data.json";
const newUser = { name: "Anant", age: 20 };

const users = fs.existsSync(file)
  ? JSON.parse(fs.readFileSync(file, "utf-8") || "[]")
  : [];

users.push(newUser);

fs.writeFileSync(file, JSON.stringify(users, null, 2));