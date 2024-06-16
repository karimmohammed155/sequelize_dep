import express from "express"
import {db_connection} from "./database/connection.js"
import user_router from "./src/modules/users/users.route.js"
import post_router from "./src/modules/posts/posts.route.js"
import comment_router from "./src/modules/comments/comments.routes.js"
const app = express()
const port = 8080
app.use(express.json())
app.use("/user",user_router)
app.use('/post',post_router)
app.use('/comment',comment_router)
db_connection()
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))