const express = require('express');
const router = express.Router()
const books = require('../books');

router.get('/',(req,res)=>{
    try{
 res.status(200).json(books);
    }
    catch(error){
 console.log(error);
 res.status(404).json({error:"Books not found"})
    }
 })
 router.get('/:id',(req,res)=>{
    try{
const bookID = parseInt(req.params.id);
console.log(bookID);
const book = books.find(prod=>prod.id===bookID)
if(!book){
    return res.status(404).json({error:"Book not found"})
}
res.status(200).json(book);
    }
    catch(error){
        console.log(error);
        res.status(500).json({error:error.message})
    }
})



module.exports = router