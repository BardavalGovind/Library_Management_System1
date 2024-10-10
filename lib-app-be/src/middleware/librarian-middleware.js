const librarianMiddleware = async (req, res, next)=>{
    if(req.user.type !== "LIBRARIAN"){
        return res
            .status(403)
            .send({ message: "You are not authorized to do this task." })
    }
    next();
}
module.exports =  { librarianMiddleware };