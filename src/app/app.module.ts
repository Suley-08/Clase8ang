import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './CALCULADORA/header/header.component';
import { BodyComponent } from './CALCULADORA/body/body.component';
import { ButtonComponent } from './CALCULADORA/button/button.component';
//import { ColorStyleDirective } from './color-style.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ButtonComponent,
   // ColorStyleDirective,
  ],
  imports: [
    BrowserModule,
    //BodyComponent,
    //ButtonComponent,
    //ColorStyleDirective,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
