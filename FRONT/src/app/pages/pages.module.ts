import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';

import { BoardComponent } from './kanbanBoard/board/board.component';
import { NavbarComponent } from './kanbanBoard/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    BoardComponent,
    HomeComponent,
  ],
  imports: [MaterialModule, AppRoutingModule, CoreModule],
  exports: [LoginComponent, NavbarComponent, BoardComponent, HomeComponent],
})
export class PagesModule {}
