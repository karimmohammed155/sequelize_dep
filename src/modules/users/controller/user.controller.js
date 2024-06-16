import { Model } from "sequelize";
import user from "../../../../database/models/users.models.js";
import bcrypt from "bcryptjs"
import post from "../../../../database/models/posts.models.js";
import comment from "../../../../database/models/comments.models.js";
export const sign_up=async (req,res,next)=>{
    try{
    const{name,email,password}=req.body;
    const cipher=bcrypt.hashSync(password,10)
    const new_user= await user.findOrCreate({
        where:{email},
        defaults:{name,email,password:cipher}})
    if(!new_user[1])
    {
        res.json({message:"already exists"})
    }
    res.json({message:"the user added successfully",new_user})
}
catch(error){
    console.log(error)
}
}

export const login=async(req,res,next)=>{
    const list =await user.findOne({
        where:{
            email:req.query.email,
            password:req.query.password
        }
    })
    res.json(list)
}

export const logout=async(req,res,next)=>{
    const found=await user.findByPk(req.query.id)
    if(found)
    {
        res.json({message:"logged out successfully"})
    }
    else
    {
        res.json({message:"not found"})
    }
}

export const specific_user=async(req,res,next)=>{
    try{
    const spec_user=await comment.findAll({
        include:[{model:user},{model:post}]
    })
    res.json(spec_user)
}
catch(error)
{
    console.log(error);
}
}