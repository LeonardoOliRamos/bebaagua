import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotaomenuComponent } from '../botaomenu/botaomenu.component';
import { MenubarComponent } from '../menubar/menubar.component';

const routes: Routes = [
  {path: '', component: MenubarComponent},
  {path: 'botao', component: BotaomenuComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
