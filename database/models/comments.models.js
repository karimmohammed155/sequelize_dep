import { DataTypes } from "sequelize";
import { seq_instance } from "../connection.js";
import user from "./users.models.js";
import post from "./posts.models.js";

const comment=seq_instance.define("comment",
{
    id:
    {
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    content:
    {
        type:DataTypes.STRING,
        allowNull:false,
    }
},
{
    timestamps:true
}
)

user.hasMany(post,
    {
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    }
)
user.hasMany(comment,
    {
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    }
)
comment.belongsTo(user)
comment.belongsTo(post)
export default comment;