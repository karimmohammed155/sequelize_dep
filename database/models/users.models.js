import { DataTypes } from "sequelize";
import { seq_instance } from "../connection.js";

const user=seq_instance.define("User",
{
    id:
    {
        type:DataTypes.INTEGER(11),
        primaryKey:true,
        autoIncrement:true
    },
    name:
    {
        type:DataTypes.STRING,
        allowNull:false
    },
    email:
    {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:
    {
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:true
}
)

export default user;