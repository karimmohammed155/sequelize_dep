import post from "../../../../database/models/posts.models.js";
export const add_post=async (req,res,next)=>{
    const{title,content,author}=req.body;
    const new_post= await post.findOrCreate({
        where:{title},
        defaults:{title,content,author}})
    res.json({message:"the post added successfully",new_post})
}

export const list_posts=async(req,res,next)=>{
    const list=await post.findByPk(req.query.id)
    res.json(list)
}

export const update_posts=async(req,res,next)=>{
    const {title,content,author}=req.body
    const{id}=req.query
    const updated=await post.update(
        {
            title,content,author
        },
        {
            where:{
                id
            }
        }
    )
    res.json(updated)
}

export const delete_posts=async(req,res,next)=>{
    const deleted=await post.destroy({
        where:{
            id:req.query.id
        }
    })
    res.json(deleted)
}
export const specific_post=async(req,res,next)=>{
    const spec_post=await post.findByPk(req.query.id)
    res.json(spec_post.author)
}