"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
var Usuario = /** @class */ (function (_super) {
    __extends(Usuario, _super);
    function Usuario() {
        var _this = _super.call(this, "Josi", 22) || this;
        _this.adm = false;
        _this.gerente = true;
        return _this;
    }
    Usuario.prototype.tipoPessoa = function (tipo) {
        if (tipo == "adm" && this.adm) {
            this.login = "eberson";
            console.log("Hey administrator system " + this.login);
        }
        else if (tipo == "adm" && this.gerente) {
            this.login = "gerente";
            this.nomeUsuario = "Ana Paula";
            this.idadeUsuario = 25;
            console.log("Hi ma'am " + this.nomeUsuario + " It's " + tipo + " by system and age " + this.idadeUsuario + ".");
        }
        else {
            _super.prototype.tipoPessoa.call(this, "student");
        }
    };
    return Usuario;
}(main_1.Pessoa));
exports.Usuario = Usuario;
//# sourceMappingURL=usuarioPermissao.js.map