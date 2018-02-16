let nomeRetorno = function (nome: string): string {

    if (nome == "" || nome == null) {

        return nome = "Eberson";
    }

    return nome;
}

console.log(`Hey, my name is ${nomeRetorno("")}. Goog night Mr. ${nomeRetorno("")}!`);

console.log("==========================================================");

let numeroRetorno = function (numero: number): boolean {
    let numeroValido: boolean = false;

    console.log(`Seu numero é ${numero}`);
    if (numero > 0) {

        return numeroValido = true;
    }

    return numeroValido;
}

console.log(`Valor é maior que 0? ${numeroRetorno(2 ^ 6)}`);

console.log("==========================================================");

let lastName = (lastName: string) => console.log(`Your lastname is ${lastName} Mr. ${nomeRetorno(null)}`);
lastName("Ramos");

console.log("==========================================================");

function inc(speed: number, inc: number = 1): number {

    return speed + inc;
}

console.log(`inc (5, 1) = ${inc(5, 1)}`);
console.log(`inc (5) = ${inc(5)}`);