import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
import {
  loginiValidationRules,
  registerValidationRules,
  validate,
} from "../validator/validator.js";

const router = express.Router();

router
  .route("/")
  .post(registerValidationRules(), validate, registerUser)
  .get(protect, admin, getUsers);
router.post("/login", loginiValidationRules(), validate, authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
router
  .route("/:id")
  .delete(protect, admin, deleteUser)
  .get(protect, admin, getUserById)
  .put(protect, admin, updateUser);

export default router;
