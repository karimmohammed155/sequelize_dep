import { Router } from "express";
import * as post_controller from "./controller/posts.controller.js";
const post_router=Router();

post_router.post("/add",post_controller.add_post)
post_router.get("/list",post_controller.list_posts)
post_router.patch("/update",post_controller.update_posts)
post_router.delete('/delete',post_controller.delete_posts)
post_router.get("/specific",post_controller.specific_post)
export default post_router;