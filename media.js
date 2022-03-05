var nota1 = 8;
var nota2 = 6;
var nota3 = 7;
var nota4 = 9;
var media = 4;
var notaFinal = (nota1 + nota2 + nota3 + nota4) / media;

if(notaFinal >= 7){
    console.log(notaFinal + ' - ' + "Aprovado");
}else if (notaFinal >= 5){
    console.log(notaFinal + ' - ' + "Recuperação");
}else{
    console.log(notaFinal + ' - ' + "Reprovado");
}