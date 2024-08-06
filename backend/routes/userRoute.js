import express from "express";
import { bookmarks, follow, getMyProfile, getOtherUsers, Login, logout, Register, unfollow } from "../controllers/userControllers.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(logout);
router.route("/bookmarks/:id").put(isAuthenticated, bookmarks);
router.route("/profile/:id").get(isAuthenticated, getMyProfile);
router.route("/otheruser/:id").get(isAuthenticated, getOtherUsers);
router.route("/follow/:id").post(isAuthenticated, follow)
router.route("/unfollow/:id").post(isAuthenticated, unfollow)

export default router;