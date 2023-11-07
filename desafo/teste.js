let nivel = " "
let result = ranque (10, 2)
console.log(`O Héroi tem o saldo ${result} está no nível ${nivel}`)

function ranque(vitoria, derota) {
    
    if (ranque < 11) {
        nivel = "Ferro"
    } else if (ranque >= 11 && ranque < 21) {
        nivel = "Bronze"
    } else if (ranque >= 21 && ranque < 51) {
        nivel = "Prata"
    } else if (ranque >= 51 && ranque < 81) {
        nivel = "Ouro"
    } else if (ranque >= 81 && ranque < 91) {
        nivel = "Diamante"
    } else if (ranque >= 91 && ranque < 101) {
        nivel = "Lendário"
    } else {
        nivel = "Imortal"
    } 

    return vitoria - derota

}
