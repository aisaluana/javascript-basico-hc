var possivelValor = 0;
var numeroSorteado = 10;

var achou = false;

//while(!achou) {
//    console.log('achou');
//}
while(!achou) {
    possivelValor += 1;
    if(numeroSorteado === possivelValor){
        achou = true;
    } else {
        console.log('Possível valor não corresponde ao número sorteado ' + possivelValor);
    }
}
