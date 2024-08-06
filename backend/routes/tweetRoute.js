import express from "express";

import { createTweet, deleteTweet, getAllTweets, getfollowingTweets, likeOrDislike } from "../controllers/tweetControllers.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, likeOrDislike);
router.route("/getAlltweet/:id").get(isAuthenticated, getAllTweets);
router.route("/getfollowingtweets/:id").get(isAuthenticated, getfollowingTweets)

export default router;