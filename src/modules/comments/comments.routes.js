import { Router } from "express";
import * as comment_controller from "./controller/comments.controller.js";
const comment_router=Router();

comment_router.post("/add",comment_controller.add_comment)
comment_router.get("/list",comment_controller.list_comments)
comment_router.patch("/update",comment_controller.update_comments)
comment_router.delete('/delete',comment_controller.delete_comments)
export default comment_router;