require("dotenv").config(); // Load .env variables

const db = require("../config/db");
const bcrypt = require("bcryptjs");

const createAdmin = async () => {
  const username = "admin";
  const plainPassword = "admin123";

  // 1️⃣ Check if admin exists
  const checkQuery = "SELECT * FROM users WHERE username = ?";
  db.query(checkQuery, [username], async (err, results) => {
    if (err) {
      console.error("Error checking for existing admin:", err);
      process.exit(1);
    }

    if (results.length > 0) {
      console.log("Admin already exists, skipping creation.");
      process.exit(0);
    }

    // 2️⃣ Hash passwordd
    const hashedPassword = await bcrypt.hash(plainPassword, 10);

    // 3️⃣ Insert addmin
    const insertQuery = `
      INSERT INTO users (username, password, role)
      VALUES (?, ?, 'admin')
    `;
    db.query(insertQuery, [username, hashedPassword], (err) => {
      if (err) {
        console.error("Error creating admin:", err);
      } else {
        console.log("Admin created successfully.");
      }
      process.exit(0);
    });
  });
};

createAdmin();
