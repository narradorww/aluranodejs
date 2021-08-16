//A responsabilidade desse arquivo é configurar a rota de atendimento

module.exports = app =>{

app.get('/atendimentos', (req, res)=> res.send("Você está na rota de atendimentos e esta realizando um get") )

app.post('/atendimentos', (req, res)=> {
    console.log(req.body)
    res.send("Você está na rota de atendimentos e esta realizando um post")

})

}