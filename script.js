const telaentrada = window.document.querySelector('.telaentrada');
const section = window.document.querySelector('section');
const body = window.document.querySelector('body');

let nome;
let participantes
let status;
function pegarNome(){
    message = window.document.querySelector('.mensagem')
    nome = message.value
    telaentrada.style.display='none';
    section.style.display='block';
    body.style.background="white";
    participantes = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', {name: nome});
    
    setInterval(UsuariOnline,5000)
    pegarMensagens();
    setInterval(pegarMensagens,3000)
}

function UsuariOnline(resposta){
    online = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', {name: nome});
}

function pegarMensagens(){
    

    // axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome );
    const mensagens = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');
    
    

    
    // entrar = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants ', nome);
    // entrar.then(Verificar)
    mensagens.then(EntrarNaSala);
    

}

function EntrarNaSala(resposta){
    
    // console.log()
    conteudo = document.querySelector('.conteudo')
    conteudo.innerHTML=''
    for (let i=0; i<resposta.data.length;i++) {
        tempo = resposta.data[i].time
        usuario = resposta.data[i].from
        texto = resposta.data[i].text
        conteudo.innerHTML+=`<div>
        <time>(${tempo})&nbsp </time><strong>${usuario}&nbsp</strong><h1>${texto}</h1>
    </div>`
        // texto.scrollIntoView();
    
    
        
    }
    
    
}

