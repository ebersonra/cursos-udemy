"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usuarioPermissao_1 = require("./usuarioPermissao");
var main_1 = require("./main");
var _ = require("lodash");
console.log(_.pad("Typescript Examples", 40, "+"));
var pessoa = new main_1.Pessoa("Eberson", 27);
pessoa.tipoPessoa("physical");
var usuario = new usuarioPermissao_1.Usuario();
usuario.tipoPessoa("adm");
var tipoUsuario = function (tipo) { return tipo.adm == true; };
console.log("It's adm? " + (tipoUsuario(usuario) ? 'yes' : 'no'));
//# sourceMappingURL=pessoa.js.map