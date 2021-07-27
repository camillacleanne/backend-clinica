
# node-express
## DESAFIO
 
Projeto criado através de uma API REST com Javascript (Node.js) para facilitar o gerenciamento de horários de uma clínica. Para os testes e verificações utilizei o Postman e, como solicitado, não fiz uso de banco de dados.

### PARA CRIAR O PROJETO
Usei a IDE Visual Studio para construir a API com o auxilio da ferramenta Express.js através do npm com testes e validações em memória.
*Para preparar o ambiente indico os sites abaixo:
> https://code.visualstudio.com/download 
> .
> https://goo.gl/zMwY28 .
> .
> https://www.postman.com/downloads/ 
> .
> https://www.npmjs.com/get-npm

### AMBIENTE DE DESENVOLVIMENTO
1. Após clonar ou baixar o repositório 
> https://github.com/camillacleanne/backend-clinica.git

2.Abrir o projeto no visual Studio e através do terminal executar o seguinte comando:
*npm install* para todas as dependências necessárias descritas no package.json
*npm start* para ele subir um servidor local(geralmente na porta localhost:3000

3. Abrir o postman
Através da URL com o metodo **POST**:
> http://localhost:3000/horario 
Fazer a verificação da população dos dados em:
Body>raw> JSON :
{
    "day":"202o-04-12",
    "intervalo": {
        "start": "14:00",
        "end": "15:00"
    }
}
4. No **GET** validar o input
5. Se popular mais de um ID eles vão seguir na sequência e conseguimos *deletar* por ID
> http://localhost:3000/horario/id
> exemplo : http://localhost:3000/horario/1

As regras e implementos por intervalo ainda vão ser implementadas

