import express from "express";
import getAllPosts from "../controller/postController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send("Welcome to blog API");
});

router.get("/posts/", async (req, res) => {
  const posts = await getAllPosts(); // assuming getAllPosts returns a promise
  res.json(posts);
});

export default router;
