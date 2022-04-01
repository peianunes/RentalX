import { Router } from "express";
import multer from "multer";

import { CreateUserController } from "@modules/account/useCases/CreateUserController";
import { UpdateAvatarUserController } from "@modules/account/useCases/updateAvatar/UpdateAvatarUserController";

import uploadConfig from "../../../../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";

const userRoutes = Router();
const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const updateAvatarUserController = new UpdateAvatarUserController();
const createUserController = new CreateUserController();

userRoutes.post("/", createUserController.handle);
userRoutes.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateAvatarUserController.handle
);

export { userRoutes };
