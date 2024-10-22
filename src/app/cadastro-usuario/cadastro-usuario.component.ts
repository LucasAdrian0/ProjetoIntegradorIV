import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-usuario',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cadastro-usuario.component.html',
  styleUrl: './cadastro-usuario.component.css'
})
export class CadastroUsuarioComponent implements OnInit{
@Input() btnText!:string;

formulario!: FormGroup;

constructor(){}


ngOnInit(): void{
  this.formulario = new FormGroup({
    id: new FormControl(''),
    NomeUsuario: new FormControl('',[Validators.required]),
    CPF: new FormControl('',[Validators.required]),
    DataNascimento: new FormControl('',[Validators.required]),
    Email: new FormControl('',[Validators.required]),
    Endereco: new FormControl(''),
    Login: new FormControl('',[Validators.required]),
    Senha: new FormControl('',[Validators.required])
  })
}

get NomeUsuario(){
  return this.formulario.get('nomeUsuario')!;
}
get CPF(){
  return this.formulario.get('CPF')!;
}
get DataNascimento(){
  return this.formulario.get('DataNascimento')!;
}
get Email(){
  return this.formulario.get('Email')!;
}
get Login(){
  return this.formulario.get('Login')!;
}
get Senha(){
  return this.formulario.get('Senha')!;
}


submit (){
  console.log("Enviou o formulário")
}
}

