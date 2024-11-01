import pool from "./db.js";

const getAllPosts = async () => {
  try {
    //   const result = await query("SELECT * FROM users");
    const result = await pool.query("SELECT * FROM posts");
    return result.rows;
  } catch (err) {
    console.error(err);
  }
};

export default getAllPosts;
