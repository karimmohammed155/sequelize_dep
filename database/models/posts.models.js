import { DataTypes } from "sequelize";
import { seq_instance } from "../connection.js";
import user from "./users.models.js";

const post=seq_instance.define("post",
{
    id:
    {
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    title:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    content:
    {
        type:DataTypes.STRING,
        allowNull:false,
    },
    author:
    {
        type:DataTypes.STRING,
        allowNull:false
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
post.belongsTo(user)
export default post;