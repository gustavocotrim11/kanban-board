import { NgModule } from '@angular/core';

import { MaterialModule } from '../shared/material/material.module';

import { BoardComponent } from './board/board.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [LoginComponent, BoardComponent, HomeComponent],
  imports: [MaterialModule, AppRoutingModule, CoreModule],
  exports: [LoginComponent, BoardComponent, HomeComponent],
})
export class PagesModule {}
