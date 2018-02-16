import { Usuario } from './usuarioPermissao';
import{Pessoa, TipoUsuario} from './main';

import * as _ from 'lodash';

console.log(_.pad("Typescript Examples", 40, "+"));

let pessoa = new Pessoa("Eberson", 27);
pessoa.tipoPessoa("physical");

let usuario = new Usuario();
usuario.tipoPessoa("adm");

let tipoUsuario = (tipo: TipoUsuario) => tipo.adm == true;
console.log(`It's adm? ${tipoUsuario(usuario) ? 'yes' : 'no'}`);