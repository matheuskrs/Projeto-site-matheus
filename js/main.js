let alunos = [
    {nome: "Matheus" , dica1: "Gosta de programar", 
    dica2: "É BOBO", dica3: "Gosta de strogonoff de frango", sexo: "m"},

    {nome: "Adilson", dica1: "Apareceu um pouco depois do projeto ter começado", 
    dica2: "É um dos pilares do Conecta", dica3: "Está sempre muito chique", sexo: "m"},

    {nome: "Gallo", dica1: "Se parece com um personagem de divertidamente", 
    dica2: "É lelé da cuca", dica3: "O MESTRE DA PROGRAMAÇÃO", sexo: "m"}

];


let ranNum = (Math.floor(Math.random()*3));
let diquinha1 = alunos[ranNum].dica1;
let diquinha2 = alunos[ranNum].dica2;
let diquinha3 = alunos[ranNum].dica3;

function checkValue(){
    let userChoice = document.getElementById('studentsList').value;
    console.log(ranNum, userChoice);
    if(userChoice == ranNum){
        Swal.fire({
            title: "Parabéns!",
            text: "Você acertou!",
            icon: "success"
        });
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
            title: "Que pena! Você errou.",
            text: "Mais sorte da próxima vez!",
        });
    }

    ranNum = (Math.floor(Math.random()*3));
    diquinha1 = alunos[ranNum].dica1;
    diquinha2 = alunos[ranNum].dica2;
    diquinha3 = alunos[ranNum].dica3;
}

let dicalida1 = false;
let dicalida2 = false;
let dicalida3 = false;

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
