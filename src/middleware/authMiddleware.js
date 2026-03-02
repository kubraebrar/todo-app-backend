import jwt from 'jsonwebtoken'

//token 'ı kullanıcıdan almak 
function authMiddleware (req,res,next){
    const token = req.headers['authorization']

    if (!token) {
        return res.status(401).json({ message: 'Token missing' });
    }

//token doğrulama 
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err){
            return res.status(401).json({message: 'Failed to authenticate token'})
        }
        req.userId = decoded.id
        next() // means go to the next middleware or route handler(okay you're done with the middleware now contine with other step, routes )
    })    
    console.log("AUTH HEADER:", req.headers['authorization']);


}
export default authMiddleware