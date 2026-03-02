import express from 'express'
import { get } from 'http'
import prisma from '../prismaClient.js'

const router = express.Router()

//Get all todos for a user
router.get('/',async (req,res) =>{
   // const getTodos = db.prepare(`SELECT * FROM todos WHERE user_id =? `)
   // const todos = getTodos.all(req.userId)
   const todo = await prisma.todo.findMany({
     where:{
        userId: req.userId
     }
   })
    res.json(todo)

})
//Create a new todo 
router.post('/',async (req,res) =>{
    const {task} = req.body
   // const insertTodo = db.prepare(`INSERT INTO todos (user_id ,task) VALUES (?,?)`)
    //const result = insertTodo.run(req.userId,task)
    const todos = await prisma.todo.create({
        data:{
            task,
            userId: req.userId

        }
    })
    res.json(todos)

})
//Update a todo 
router.put('/:id',async (req,res) =>{
    const {completed} = req.body
    const {id} = req.params
    //const updateTodo = db.prepare(`UPDATE todos SET completed = ? WHERE id = ?`)
    //const result = updateTodo.run(completed,id)
    const updateTodo = await prisma.todo.updateMany({
        where:{
            id: parseInt(id),
            userId: req.userId

        },
        data:{
            completed: !!completed
        }
    })
    res.json(updateTodo)


})

//Delete a todo
router.delete('/:id', async (req,res) =>{
    const {id} =req.params
    const userId = req.userId
    //const deleteTodo = db.prepare(`DELETE FROM todos WHERE id = ? AND user_id = ?`)
    //const result = deleteTodo.run(id,userId)
    const deleteTodo = await prisma.todo.deleteMany({
        where:{
            id: parseInt(id),
            userId

        }
    })
    res.json({message: 'Todo deleted successfully'})


})

export default router