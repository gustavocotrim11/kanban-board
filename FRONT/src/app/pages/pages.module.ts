import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material/material.module';

import { BoardComponent } from './kanbanBoard/board/board.component';
import { NavbarComponent } from './kanbanBoard/navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';
import { CardComponent } from './kanbanBoard/board/card/card.component';
import { NewCardModalComponent } from './kanbanBoard/board/new-card-modal/new-card-modal.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { PagesService } from './pages.service';

@NgModule({
  declarations: [
    LoginComponent,
    NavbarComponent,
    BoardComponent,
    HomeComponent,
    CardComponent,
    NewCardModalComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
  ],
  exports: [
    LoginComponent,
    NavbarComponent,
    BoardComponent,
    HomeComponent,
    ErrorPageComponent,
  ],
  providers: [PagesService],
})
export class PagesModule {}
