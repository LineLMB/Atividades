//Cadastro
var data = 20220228;
var idade = 21;
var nome = 'Théo';
var listaParticipantes = ['João', 'Valéria', 'Ana', 'Mauro'];
var listaPalestrantes = ['Antonio', 'Thiago', 'Suzana', 'Marilia', 'Wilson'];
var quantidadeDeParticipantes = listaPalestrantes.length;

if(data < 20220226){
console.log('Data inválida');
} else {
    console.log('Data válida! Por favor informe a idade do participante: ');
    if(idade < 18){
        console.log('Não é permitido participantes menores de idade!');
    } else{
        console.log('Por favor informe o nome do participante: ');
        if(quantidadeDeParticipantes < 100){
            listaParticipantes.push(nome);
            console.log(listaParticipantes);
            console.log(listaPalestrantes);
        } else {
            console.log('Não é possível inserir mais participantes nesse evento');
            }
        }
  }