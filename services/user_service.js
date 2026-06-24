const db = require("../db/db");

const getAllUsers = async () => {
  try {
    const [rows] = await db.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

module.exports = { getAllUsers };