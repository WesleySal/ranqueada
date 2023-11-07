/*
torrar()

function torrar(){
    console.log("torrando pão")
    injetarPao()
}

function injetarPao(){
    console.log("colocar o pão")
    console.log("finalizado")
}
*/
mainSaveData()

function mainSaveData(){ //é uma função que chama as outras funções
    getData()
    checkValues()
    sendToDatabase()
}

function getData() {
    console.log("pegando dados do usuário")
    if (1 < 3){
        console.log("número encontrado")
    }
}

function checkValues(){
    console.log("validando dados do usuário")
}

function sendToDatabase(){
    console.log("cadastrando dados do usuário")
}