import express from "express";

const app = express()
app.set('view engine', 'ejs')

const port = 3001


app.listen('3001', (req,res) =>{
    console.log(`estou rodando na porta ${port}`)
})
//Rotas
app.get('/', (req,res) => {
    res.render('index.ejs')
})
app.get('/detalhes',(req,res) =>{
    res.render('detalhes.ejs')
})
