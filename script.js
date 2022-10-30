const telaentrada = window.document.querySelector('.telaentrada');
let section = window.document.querySelector('section');
const body = window.document.querySelector('body');



document.addEventListener('keydown', e => {
    if (e.key==="Enter"){
        axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', {
    from: nome,
    to: "Todos",
    text: msg.value,
    type: "message"
})
    msg.value = '';
    }
})






let nome;
let participantes
let status;
let envio;
let msg = document.querySelector('.enviar')
function pegarNome() {
    message = window.document.querySelector('.mensagem')
    nome = message.value
    participantes = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', { name: nome });
    participantes.then(TratarSucesso)
    participantes.catch(TratarErro)
    function TratarSucesso() {
        telaentrada.style.display = 'none';
        section.style.display = 'block';
        body.style.background = "white";
        setInterval(UsuariOnline, 5000)
        pegarMensagens();
        setInterval(pegarMensagens, 3000)
    }

    function TratarErro() {
        alert("Este nome de usuário já está em uso. Por favor, digite outro nome.")
    }



}

function UsuariOnline() {
    online = axios.post('https://mock-api.driven.com.br/api/v6/uol/status', { name: nome });



}



function pegarMensagens() {


    // axios.post('https://mock-api.driven.com.br/api/v6/uol/participants', nome );
    const mensagens = axios.get('https://mock-api.driven.com.br/api/v6/uol/messages');




    // entrar = axios.post('https://mock-api.driven.com.br/api/v6/uol/participants ', nome);
    // entrar.then(Verificar)
    mensagens.then(EntrarNaSala);


}

function EntrarNaSala(resposta) {
    
    conteudo = document.querySelector('.conteudo')
    conteudo.innerHTML = ''
    for (let i = 0; i < resposta.data.length; i++) {
        tempo = resposta.data[i].time
        usuario = resposta.data[i].from
        texto = resposta.data[i].text
        colega = resposta.data[i].to
        tipo = resposta.data[i].type

        if (colega !== "Todos" && colega=== nome) {
            console.log(colega)
            conteudo.innerHTML += `<div class='privado'>
                <time>(${tempo})&nbsp </time><strong>${usuario}&nbsp</strong><h1>${texto}</h1>
            </div>`
        }
        else if (tipo === 'status') {
            conteudo.innerHTML += `<div class='status'>
                <time>(${tempo})&nbsp </time><strong>${usuario}&nbsp</strong><h1>${texto}</h1>
            </div>`
        }
        else if(tipo === 'message')
        conteudo.innerHTML += `<div class='normal'>
            <time>(${tempo})&nbsp </time><strong>${usuario}&nbsp</strong><h1>${texto}</h1>
        </div>`


    }

    ultimamsg = document.querySelectorAll('time')
    ultimamsg[ultimamsg.length-1].scrollIntoView({behavior:"smooth"})
    
}


function enviar() {
    envio = axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', {
        from: nome,
        to: "Todos",
        text: msg.value,
        type: "message"
    });
    msg.value = '';

    // document.addEventListener('keydown', e => {
    //     if (e.key==="Enter"){
    //         axios.post('https://mock-api.driven.com.br/api/v6/uol/messages', {
    //     from: nome,
    //     to: "Todos",
    //     text: msg.value,
    //     type: "message"
    // })
    //     }
    //     msg.value = '';
    // })
    

}

const part = document.querySelector(".participantes")
const escondida = document.querySelector('.escondida')
function TelaParticipantes(){
    
    escondida.style.display="block"
    // console.log(part)
    // console.log(section)
    part.style.display="block"
//     // document.querySelector("section").style.background="rgba(10,23,55,0.5);"
    
//     // section.addEventListener('click', esconder)
    
    // escondida.onclick = esconder()
    //     section.style.display="none"
        // part.style.display="none"
        // alert('ok')
    

    let pessoas = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants')
    pessoas.then(Verificar)
    console.log('teste telaparticipantes')

}

function Verificar(teste){
    console.log(teste.data)
    people = document.querySelector('.usuarios')
    for (let i = 0; i < teste.data.length; i++){
        people.innerHTML += `<div class='usuario' onclick='testando(this)'><ion-icon class='people' name="person-circle-outline"></ion-icon>
        <p>${teste.data[i].name}</p><ion-icon class='check' name="checkmark-outline"></ion-icon></div>`
    }
}

function esconder(){
    part.style.display="none"
    escondida.style.display="none"
    people.innerHTML=''

}

function HabilitarCheck(esse){
    esse.children[2].classList.toggle('checkon')
        

    // esse.children[2].style.display="block"
    // elemento = document.querySelector('.lock .check')
    // console.log(elemento)
    // if elemento.style.display==="block"{
    //     elemento.style.display="none"
    // }
    // else{
    //     elemento.style.display="block"
    // }
}
let player;
function testando(user){
    console.log(user.parentNode.children)
    // console.log(user.parentNode.children[3].children[2].classList.contains('checkon'))
    // user.children[2].classList.add('checkon')
    for (let i=0; i<user.parentNode.children.length;i++){
        if (user.parentNode.children[i].children[2].classList.contains('checkon') &&  user.children[2].classList.contains('checkon')) {
            console.log('teste entrando no if')
            user.children[2].classList.remove('checkon')
        }
        else{
            console.log('teste entrando no else')
            user.children[2].classList.add('checkon')
        }
    }
    // user.children[2].classList.toggle('checkon')
}