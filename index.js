let nomeJogador = "Eduzera"
let nivelJogador = 6890
let tipo = ""

if (nivelJogador >= 1000 && nivelJogador < 1001){
    tipo = "Ferro"
} else if (nivelJogador >= 1001 && nivelJogador < 2000){
   tipo = "Bronze"
} else if (nivelJogador >= 2001 && nivelJogador < 5000){
    tipo = "Prata"
} else if (nivelJogador >= 6001 && nivelJogador < 7000){
    tipo = "Ouro"
} else if (nivelJogador >= 7001 && nivelJogador < 8000){
    tipo = "Platina"
} else if (nivelJogador >= 8001 && nivelJogador < 9000){
    tipo = "Ascendente"
} else if (nivelJogador >= 9001 && nivelJogador < 10000){
    tipo = "Imortal"
} else if (nivelJogador >= 10001) {
    tipo = "Radiante"
}else {
    tipo = "Nivel desconhecido"
}

console.log("O Herói de nome " + nomeJogador + " está no nível de " + nivelJogador + " nosso Herói é " + tipo);