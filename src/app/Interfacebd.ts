/*entidade do banco de dados*/
export interface Interfacebd{
    id?:number,
    nomeUsuario:string,
    CPF: Number,
    DataNascimento: Date,
    Email: string,
    Endereco: string,
    Login: string,
    Senha: string,
    creat_at:string,
    update_at: string,
    coments?:[{text:string;username:string}];
    
}