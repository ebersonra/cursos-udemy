"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Pessoa.prototype.tipoPessoa = function (tipo) {
        console.log("Hello person's " + tipo + " name " + this.nome + " is age " + this.idade + ".");
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
//# sourceMappingURL=main.js.map