telaentrada = window.document.querySelector('.telaentrada')
section = window.document.querySelector('section')
body = window.document.querySelector('body')



function pegarNome(){
    telaentrada.style.display='none'
    section.style.display='block'
    body.style.background="#DCDCDC"
    nome = window.document.querySelector('.mensagem').value
}