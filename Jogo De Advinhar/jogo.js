var entrada = require('readline-sync');
var secreto = Math.floor(Math.random() * 10);
var escolha;
var tentativa = 0;
var desistir;

console.log(secreto)

while (escolha != secreto) {
    escolha = entrada.question('Escolha o numero secreto de 0 a 100:');
    tentativa++
    if (escolha == secreto) {
        console.log('Você acerto o número!!!');
        console.log('Você tentou ' + tentativa);
        break;
    } else if (escolha > secreto) {
        console.log('Esse número é maior que o secreto.')

    } else if (escolha < secreto) {
        console.log('Esse número é menor que o secreto.')
    }
    desistir = entrada.question('Desistir? (S/N): ').toUpperCase();
    while (desistir != 'S') {
        if (desistir =='S'){
            console.log(`Voce desistiu`);
        } else if (desistir=='N'){
            console.log(`voce dediciu continuar`)
            break
        }else {
            console.log(`digite algo valido`)
            desistir = entrada.question('Desistir? (S/N): ').toUpperCase();
        }
    }
}
