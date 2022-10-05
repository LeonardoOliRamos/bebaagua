import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotaomenuComponent } from './botaomenu/botaomenu.component';
import { MenubarComponent } from './menubar/menubar.component';
import { AppRoutingModule } from './routing/routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    BotaomenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
