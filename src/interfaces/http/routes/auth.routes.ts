import { Router } from "express";
import { UserController } from "../controllers/user.controller";


const authRouter = Router();
const userController = new UserController();

authRouter.post("/register", (req, res) => userController.register(req, res));

export default authRouter;