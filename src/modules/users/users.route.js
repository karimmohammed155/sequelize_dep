import { Router } from "express";
import * as user_controller from "./controller/user.controller.js";
const user_router=Router();

user_router.post("/signup",user_controller.sign_up)
user_router.get("/login",user_controller.login)
user_router.get("/logout",user_controller.logout)
user_router.get("/specific",user_controller.specific_user)
export default user_router;