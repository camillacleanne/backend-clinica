//camada faz com que a aplicação rode na porta 3000
//inportar express para dentro do projeto atraves do require
const app = require('../src/app');

// porta que quando acessar a porta
const port = normalizaPort(process.env.PORT || '3000');

function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

//Escutar na porta e inicializar no servidor
//` template String` aciona valor de uma variavel dentro de uma string
app.listen(port, function () {
    console.log(`app listening on port ${port}`)
})