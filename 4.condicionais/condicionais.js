var nome = "LA"

if (nome === "AL") {
    console.log('Legal! Seu nome é este mesmo!');
} else if(nome === 'LA'){
    console.log('Tudo bem! Você também serve!');
}else {
    console.log('Que pena! Esse não é seu nome.');
}

switch(nome) {
    case 'AL':
        console.log('Legal! Seu nome é este mesmo!');
        break;
    case 'LA':
        console.log('Tudo bem! Você também serve!');
        break;
    default:
        console.log('Que pena! Esse não é seu nome.');
        break;
}