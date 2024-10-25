import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { CadastroParceirosComponent } from './cadastro-parceiros/cadastro-parceiros.component';


@NgModule({
  declarations: [
    
],
imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    CadastroParceirosComponent

    ],
  providers: [],
  
})
export class AppModule {}
