var suajogada;
var empates = 0;
var seuspontos = 0;
var pontosdopc = 0;

function pedra(){
	suajogada = 1;
}
function papel(){
	suajogada = 2;
}
function tesoura(){
	suajogada = 3;
}
function iniciar(){
	var escolhapc = Math.random()


if (escolhapc < 0.33) {
	
    escolhapc = 1;
}

else if (escolhapc <= 0.66) {

   escolhapc = 2;
}

else{

    escolhapc = 3;
}

if ((suajogada == 1 )&& (escolhapc == 1)){
	alert("Você jogou pedra e o computador jogou pedra, esta rodada empatou");
	empates = empates + 1;
}

if ((suajogada == 1 )&& (escolhapc == 2)){
	alert("Você jogou pedra e o computador jogou papel, você perdeu");
	pontosdopc = pontosdopc + 1;
}

if ((suajogada == 1 )&& (escolhapc == 3)){
	alert("Você jogou pedra e o computador jogou tesoura, você ganhou");
	seuspontos = seuspontos + 1;
}

if ((suajogada == 2 )&& (escolhapc == 1)){
	alert("Você jogou papel e o computador jogou pedra, você ganhou");
	seuspontos = seuspontos + 1;
}

if ((suajogada == 2 )&& (escolhapc == 2)){
	alert("Você jogou papel e o computador jogou papel, esta rodada empatou");
	empates = empates + 1;
}

if ((suajogada == 2 )&& (escolhapc == 3)){
	alert("Você jogou papel e o computador jogou tesoura, você perdeu");
	pontosdopc = pontosdopc + 1;
}

if ((suajogada == 3 )&& (escolhapc == 1)){
	alert("Você jogou tesoura e o computador jogou pedra, você perdeu");
	pontosdopc = pontosdopc + 1;
}

if ((suajogada == 3 )&& (escolhapc == 2)){
	alert("Você jogou tesoura e o computador jogou papel, você ganhou");
	seuspontos = seuspontos + 1;
}

if ((suajogada == 3 )&& (escolhapc == 3)){
	alert("Você jogou tesoura e o computador jogou tesoura, esta rodada empatou");
	empates = empates + 1;
}

document.getElementById('seuponto').innerHTML = seuspontos;
document.getElementById('pontodopc').innerHTML = pontosdopc;
document.getElementById('empate').innerHTML = empates;

}















































