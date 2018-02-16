class Pessoa {

    private nome: string;
    private idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    tipoPessoa(tipo: string){

        console.log(`Hello person's ${tipo} name ${this.nome} is age ${this.idade}.`)
    }
}

interface TipoUsuario{

    adm: boolean;
    gerente: boolean;
    vendedor: boolean;
    caixa: boolean;
}

export{Pessoa, TipoUsuario};