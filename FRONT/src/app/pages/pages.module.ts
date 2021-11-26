import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { BoardComponent } from './kanbanBoard/board/board.component';
import { NavbarComponent } from './kanbanBoard/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './kanbanBoard/card/card.component';
import { NewCardModalComponent } from './kanbanBoard/new-card-modal/new-card-modal.component';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    BoardComponent,
    HomeComponent,
    CardComponent,
    NewCardModalComponent,
  ],
  imports: [MaterialModule, AppRoutingModule, FormsModule, CoreModule],
  exports: [LoginComponent, NavbarComponent, BoardComponent, HomeComponent],
})
export class PagesModule {}
