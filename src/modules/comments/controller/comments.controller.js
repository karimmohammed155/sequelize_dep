import comment from "../../../../database/models/comments.models.js";
export const add_comment=async (req,res,next)=>{
    const{content}=req.body;
    const new_comment= await comment.create({content})
    res.json({message:"the comment added successfully",new_comment})
}

export const list_comments=async(req,res,next)=>{
    const list=await comment.findByPk(req.query.id)
    res.json(list)
}

export const update_comments=async(req,res,next)=>{
    const {content}=req.body
    const{id}=req.query
    const updated=await comment.update(
        {
            content
        },
        {
            where:{
                id
            }
        }
    )
    res.json(updated)
}

export const delete_comments=async(req,res,next)=>{
    const deleted=await comment.destroy({
        where:{
            id:req.query.id
        }
    })
    res.json(deleted)
}