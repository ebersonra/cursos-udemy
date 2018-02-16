import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PessoaComponent } from './pessoa/pessoa.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PessoaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
