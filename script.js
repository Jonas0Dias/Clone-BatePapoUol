const telaentrada = window.document.querySelector('.telaentrada');
const section = window.document.querySelector('section');
const body = window.document.querySelector('body');
const participantes = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants ');

function pegarNome(){
    telaentrada.style.display='none';
    section.style.display='block';
    body.style.background="white";
    nome = [{nome: window.document.querySelector('.mensagem').value}]
    // axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome );
    const mensagens = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    const participantes = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants ', nome);
    

    
    // entrar = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants ', nome);
    // entrar.then(Verificar)
    mensagens.then(EntrarNaSala);
    participantes.then(Verificar);
    

}

function EntrarNaSala(resposta){
    console.log(resposta.data)
    console.log()
    for (let i=0; i<resposta.data.length;i++) {
        tempo = resposta.data[i].time
        nome = resposta.data[i].from
        texto = resposta.data[i].text
        
        conteudo = document.querySelector('.conteudo')
        conteudo.innerHTML+=`<div>
        <time>(${tempo})&nbsp </time><strong>${nome}&nbsp</strong><h1>${texto}</h1>
    </div>`
    
        
    }
    
}

function Verificar(resposta){
    console.log(resposta.data)
}

