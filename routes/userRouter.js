import express from 'express'
let router = express.Router();

//API URL: 127.0.0.1:8080/user/
router.get("/",(req,resp)=>{
    resp.send('USER-root page')
})

//API URL: 127.0.0.1:8080/user/all
router.get("/all",(req,resp)=>{
    resp.send('all users')
})

//API URL: 127.0.0.1:8080/user/add
router.post("/",(req,resp)=>{
    resp.send('USER-add user')
})

//API URL: 127.0.0.1:8080/user/update
router.put("/",(req,resp)=>{
    resp.send('USER-update user')
})

//API URL: 127.0.0.1:8080/user/delete
router.delete("/",(req,resp)=>{
    resp.send('USER-delete user')
})

//export routing urls
export default router