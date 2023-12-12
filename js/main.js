let alunos = [
    {nome: "Adilson", dica1: "Apareceu um pouco depois do projeto ter começado", 
    dica2: "É um dos pilares do Conecta", dica3: "Está sempre bem arrumado.", sexo: "m"},
    {nome:"Alilson", dica1:"Gosta de cantar.",dica2:"Tem o nome muito parecido com o de outra pessoa." ,dica3:"É maior de idade." ,sexo:"m"},
    {nome:"Aline", dica1:"Interage bastante com a turma.", dica2:"Já deu um presente para cada um de nós." ,dica3:"Já viajou pra fora do país." ,sexo:"f"},
    {nome:"Andresa", dica1:"É querida por todos da turma.", dica2:"É muito dedicada.", dica3:"Conhece muito sobre todos os alunos." ,sexo:"f"},
    {nome:"Amanda", dica1:"Anda sempre perto de alguém.", dica2:"Não vai para a área dos puffs na hora do intervalo.", dica3:"Entrou para o Conecta com a melhor amiga." ,sexo:"f"},
    {nome:"Ana Luiza", dica1:"É introvertida, mas parece extrovertida.", dica2:"É divertida e sincera.", dica3:"Gosta de fofoca." ,sexo:"f"},
    {nome:"Arthur" ,dica1:"Não tem vergonha de nada.", dica2:"É muito empático.", dica3:"Tem um sorriso muito contagiante." ,sexo:"m"},
    {nome:"Cristiane", dica1:"Adora pessoas.", dica2:"É artista.", dica3: "Já contou histórias MUITO incomuns.", sexo:"f"},
    {nome:"Daniel", dica1:"Tem cabelo cacheado.", dica2: "É muito sincero e caricato.", dica3: "Corta os pedaços do bolo quase toda vez.", sexo:"m"},
    {nome:"Emanuel", dica1:"É muito bom em programar.", dica2:"Está em busca de uma namorada.", dica3:"Gosta de treinar." ,sexo:"m"},
    {nome:"Gabriel", dica1:"Estuda em uma escola à noite", dica2: "É engraçado e muito irônico.", dica3:"Senta na fileira do meio.", sexo:"m"},
    {nome:"Gabriely", dica1:"Não fala muito.", dica2:"Está sempre perto de uma mesma amiga.", dica3:"Está sempre animada." ,sexo:"f"},
    {nome: "Gallo", dica1: "Já conhecia algumas pessoas do curso antes do primeiro dia.", dica2: "É muito bom em programar.", dica3: "Se parece com um personagem de divertidamente.", sexo: "m"},
    {nome:"Gustavo", dica1:"Se importa com as pessoas.",dica2:"Tem o cabelo longo." ,dica3:"AMÉM." ,sexo:"m"},
    {nome:"Jhonathan", dica1:"É extrovertido.", dica2:"Gosta de dar o primeiro passo.", dica3:"Senta na última fileira." ,sexo:"m"},
    {nome:"Kaique", dica1:"Fez a prova paulista.", dica2:"Tem o cabelo curto.", dica3:"Senta na fileira do meio.", sexo:"m"},
    {nome:"Lohany", dica1:"Sabe falar inglês.", dica2:"É introvertida.", dica3:"É muito boa em pintar.", sexo:"f"},
    {nome:"Marcos", dica1:"Gosta de máquinas, computadores.", dica2:"Entende MUITO sobre tecnologia.", dica3:"É um professor.", sexo:"m"},
    {nome:"Maria", dica1:"Gosta de chá.", dica2:"É bem honesta quando precisa falar.", dica3:"Não tem vergonha, mas tem sono." ,sexo:"f"},
    {nome:"Matheus", dica1: "Gosta de programar.", dica2: "Tem bigode.", dica3: "Fez uma apresentação em inglês.", sexo: "m"},
    {nome:"Pedro" ,dica1:"É jogador.", dica2:"Tem um caderno de anotações.", dica3:"Possui sua própria marca." ,sexo:"m"},
    {nome:"Rafaella" ,dica1:"Já foi em um show.", dica2:"Tem muito conhecimento em história.", dica3:"Já dirige." ,sexo:"f"},
    {nome:"Sofia", dica1:"Tem pouco tempo livre.", dica2:"Fez a prova da UNESP recentemente." ,dica3:"Quer ser psicóloga." ,sexo:"f"},
    {nome:"Vera", dica1:"Adora motivacionar as pessoas.", dica2:"É uma pessoa muito calma.", dica3:"Acredita muito em crenças.", sexo:"f"},
    {nome:"Vitória", dica1:"Gosta de fazer piadas sarcásticas.", dica2:"Tem o cabelo ruivo.", dica3:"Quer ser médica." ,sexo:"f"},
    {nome:"Wellis", dica1:"Gosta de organização.", dica2:"Gosta de programar.", dica3:"Faz faculdade.", sexo:"m"},
    {nome:"Yan", dica1:"É uma pessoa muito gentil.", dica2:"É muito bom em desenhar.", dica3:"Cumprimenta todos assim que chega no curso.", sexo:"m"}
];

let list = document.getElementById('studentsList');
list.innerHTML += `<option selected disabled value = "99">Quem você chuta?</option>`
for(let i = 0; i < alunos.length; i++){
    list.innerHTML += `<option value="${[i]}">${alunos[i].nome}</option>`
}


let ranNum = (Math.floor(Math.random()*alunos.length));
if(alunos[ranNum].sexo == "f"){
    gameimage.innerHTML = `<img src="/img/misterioFeminino.jpeg" class="card-img-top" alt="pessoa misteriosa">`
}
else{
    gameimage.innerHTML = `<img src="img/misterio.jpg" class="card-img-top" alt="pessoa misteriosa">`
}
let diquinha1 = alunos[ranNum].dica1;
let diquinha2 = alunos[ranNum].dica2;
let diquinha3 = alunos[ranNum].dica3;

let dicalida1 = false;
let dicalida2 = false;
let dicalida3 = false;
let imagem = document.getElementById('gameimage')
let recorde = 0;
let rodadasGanhas = 0;
let rodadasAtuais = document.getElementById('rounds');
rodadasAtuais.innerHTML = "Rodada atual: " + (rodadasGanhas+1);
let recordeDoUsuario = document.getElementById('record');
recordeDoUsuario.innerHTML = "Recorde:" + recorde;

let secretName = document.getElementById('nomeSecreto')

function giveNameLines(){
    secretName.innerHTML = "";
    for(let i = 0; i < alunos[ranNum].nome.length; i++){
        if(alunos[ranNum].nome.charAt(i) != " "){
            secretName.innerHTML += `<button onclick = "revealLetter(${i})" class = "display-6 fs-3 text-center" id = "letrasSecretas"></button>`;
        }
        else{
            secretName.innerHTML += " ";
        }
    }
}
giveNameLines()

let lettersRevealed = 0
let tituloCarta = document.getElementById('tituloCarta')
let ultimoClicado
let permitirClicar = true
function revealLetter(index){
    if(index != ultimoClicado && permitirClicar == true){
        if(lettersRevealed < Math.round((alunos[ranNum].nome.length+1)/5)){
            secretName.childNodes[index].innerText = alunos[ranNum].nome.charAt(index)
            lettersRevealed += 1
        }
        else{
            Swal.fire({
                title: "Erro",
                text: "O limite de dicas foi atingido!",
                icon: "info"
            });
            permitirClicar = false
        }
        let dicasSobrando = Math.round(((alunos[ranNum].nome.length+1)/5)-lettersRevealed);

        if(dicasSobrando > 0){
            tituloCarta.innerText = "Letras que podem ser reveladas: " + Math.round(((alunos[ranNum].nome.length+1)/5)-lettersRevealed)
        }
        else{
            tituloCarta.innerText = "Suas dicas acabaram."
        }
    }
    ultimoClicado = index;
}
    tituloCarta.innerText = "Letras que podem ser reveladas: " + Math.round(((alunos[ranNum].nome.length+1)/5)-lettersRevealed)
    
    
    function checkValue(){
        let userChoice = document.getElementById('studentsList').value;
        dicalida1 = false;
        dicalida2 = false;
        dicalida3 = false;


    if(userChoice == ranNum){
        Swal.fire({
            title: "Parabéns!",
            text: "Você acertou!",
            icon: "success"
        });
        
        rodadasGanhas++;
        rodadasAtuais.innerHTML = "Rodada atual: " + (rodadasGanhas+1);
        if (rodadasGanhas > recorde){
            recorde = rodadasGanhas
            recordeDoUsuario.innerHTML = "Recorde:" + recorde;
        }
    }

    else if(userChoice == "99"){
        Swal.fire({
            title: "Erro",
            text: "Escolha uma opção válida.",
            icon: "error"
        });
    }

    else{
        Swal.fire({
            icon: "error",
            title: "Que pena! Você errou. \nA pessoa era: "+ alunos[ranNum].nome + "!",
            text: "Mais sorte da próxima vez!",
        });
        rodadasGanhas = 0
        rodadasAtuais.innerHTML = "Rodada atual: " + (rodadasGanhas+1);
    }

    if(userChoice < 99){
        lettersRevealed = 0;
        ultimoClicado = 99;
        ranNum = (Math.floor(Math.random()*alunos.length));
        permitirClicar = true
        tituloCarta.innerText = "Letras que podem ser reveladas: " + Math.round(((alunos[ranNum].nome.length+1)/5)-lettersRevealed)
        giveNameLines();
        if(alunos[ranNum].sexo == "f"){
            gameimage.innerHTML = `<img src="/img/misterioFeminino.jpeg" class="card-img-top" alt="pessoa misteriosa">`
        }
        else{
            gameimage.innerHTML = `<img src="img/misterio.jpg" class="card-img-top" alt="pessoa misteriosa">`
        }
        diquinha1 = alunos[ranNum].dica1;
        diquinha2 = alunos[ranNum].dica2;
        diquinha3 = alunos[ranNum].dica3;   
    }
}


function hint1(){
    dicalida1 = true
    Swal.fire({
        title: "Dica 1!",
        text: diquinha1,
        icon: "info"
    });
    dicalida2= true
}

function hint2(){
    if (dicalida2 == true){
        Swal.fire({
            title: "Dica 2!",
            text: diquinha2,
            icon: "info"
        });
        dicalida3 = true
    }
    else{
        swal.fire({
            title: "Erro!",
            text: "Leia a dica 1 primeiro!",
            icon: "error"
        })
    }
}

function hint3(){
    if (dicalida3 == true){

        Swal.fire({
            title: "Dica 3!",
            text: diquinha3,
            icon: "info"
        });
    }
    else{
        swal.fire({
            title: "Erro!",
            text: "Leia a dica 2 primeiro!",
            icon: "error"
        })
    }
}
