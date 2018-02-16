var nomeRetorno = function (nome) {
    if (nome == "" || nome == null) {
        return nome = "Eberson";
    }
    return nome;
};
console.log("Hey, my name is " + nomeRetorno("") + ". Goog night Mr. " + nomeRetorno("") + "!");
console.log("==========================================================");
var numeroRetorno = function (numero) {
    var numeroValido = false;
    console.log("Seu numero \u00E9 " + numero);
    if (numero > 0) {
        return numeroValido = true;
    }
    return numeroValido;
};
console.log("Valor \u00E9 maior que 0? " + numeroRetorno(2 ^ 6));
console.log("==========================================================");
var lastName = function (lastName) { return console.log("Your lastname is " + lastName + " Mr. " + nomeRetorno(null)); };
lastName("Ramos");
console.log("==========================================================");
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5, 1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
//# sourceMappingURL=function.js.map