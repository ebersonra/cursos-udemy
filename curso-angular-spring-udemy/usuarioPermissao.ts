import {Pessoa, TipoUsuario} from './main';

export class Usuario extends Pessoa implements TipoUsuario{

    private login: string;
    private senha: string;
    private nomeUsuario: string;
    private idadeUsuario: number;

    adm: boolean;
    gerente: boolean;
    vendedor: boolean;
    caixa: boolean;

    constructor(){
        super("Josi", 22);
        this.adm = false;
        this.gerente = true;
    }

    tipoPessoa(tipo: string){

        if(tipo == "adm" && this.adm){

            this.login = "eberson";
            console.log(`Hey administrator system ${this.login}`);
        }else if(tipo == "adm" && this.gerente){
            
            this.login = "gerente";
            this.nomeUsuario = "Ana Paula";
            this.idadeUsuario = 25;
            console.log(`Hi ma'am ${this.nomeUsuario} It's ${tipo} by system and age ${this.idadeUsuario}.`);
        }else{

            super.tipoPessoa("student");
        }
    }
}