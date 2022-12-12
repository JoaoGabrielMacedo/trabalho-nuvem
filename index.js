const express = require('express');
const path = require('path');
const app = express();

const calcula = require('./funcoes.js');

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/index.html'));
});

app.get('/page1', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page1.html'));
});

app.post("/page1",(req,res)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    res.send("A soma vale "+ calcula.soma(n1,n2))
}
)
app.get('/page2', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page2.html'));
});

app.post("/page2",(req,res)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    res.send("A subtracao vale "+ calcula.sub(n1,n2))
}
)
app.get('/page3', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page3.html'));
});

app.post("/page3",(req,res)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    res.send("A multiplicacao vale "+ calcula.mult(n1,n2))
})

app.get('/page4', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page4.html'));
});
app.post("/page4",(req,res)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    res.send("A divisao vale "+ calcula.div(n1,n2))
})
app.get('/page5', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page5.html'));
});
app.post("/page5",(req,res)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    res.send("O maior numero vale "+ calcula.maior(n1,n2))
})
app.get('/page6', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page6.html'));
});
app.post("/page3",(req,res)=>{
    const n1= Number(req.body.num1)
    const n2= Number(req.body.num2)
    res.send("A subtracao vale "+ calcula.div(n1,n2))
})
app.get('/page7', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page7.html'));
});
app.get('/page8', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page8.html'));
});
app.get('/page9', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page9.html'));
});
app.get('/page10', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page10.html'));
});
app.get('/page11', (req, res) => {
    res.sendFile(path.join(__dirname, '/pages/page11.html'));
});


//


app.get('/sub/', (req, res) => {
    var number1 = req.query['num1']
    var number2 = req.query['num2']

    if (number1 && number2) {
        res.send("A subtração dos dois números é: " + calcula.sub(number1, number2).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});
//teste

app.get('/mult/', (req, res) => {
    var number1 = req.query['num1']
    var number2 = req.query['num2']

    if (number1 && number2) {
        res.send("A multiplicacao dos dois números é: " + calcula.mult(number1, number2).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});

app.get('/div/', (req, res) => {
    var number1 = req.query['num1']
    var number2 = req.query['num2']

    if (number1 && number2) {
        res.send("A divisao dos dois números é: " + calcula.div(number1, number2).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});

app.get('/maior/', (req, res) => {
    var number1 = req.query['num1']
    var number2 = req.query['num2']

    if (number1 && number2) {
        res.send("O maior entre os dois numeros eh: " + calcula.maior(number1, number2).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});

app.get('/potencia/', (req, res) => {
    var number1 = req.query['num1']
    var number2 = req.query['num2']

    if (number1 && number2) {
        res.send("A potencia entre os dois numeros eh: " + calcula.potencia(number1, number2).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});

app.get('/sen/', (req, res) => {
    var number1 = req.query['num1']
    
    if (number1) {
        res.send("O seno do numero eh: " + calcula.sen(number1).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});

app.get('/cos/', (req, res) => {
    var number1 = req.query['num1']
    
    if (number1) {
        res.send("O cosseno do numero eh: " + calcula.cos(number1).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});
app.get('/tan/', (req, res) => {
    var number1 = req.query['num1']
    
    if (number1) {
        res.send("A tangente do numero eh: " + calcula.tan(number1).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});
app.get('/sqrt/', (req, res) => {
    var number1 = req.query['num1']
    
    if (number1) {
        res.send("A raiz quadrada do numero eh: " + calcula.sqrt(number1).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});
app.get('/percent/', (req, res) => {
    var number1 = req.query['num1']
    var number2 = req.query['num2']
    
    if (number1 && number2) {
        res.send("O resultado da porcentagem de A em relacao a B: " + calcula.percent(number1, number2).toString());
    } else {
        res.send("Parametros passado de maneira errada");
    }
});

app.listen(3000, () => {
    console.log('Servidor rodando');
});
