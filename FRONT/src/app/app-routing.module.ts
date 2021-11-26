import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NavbarComponent } from './pages/kanbanBoard/navbar/navbar.component';
import { BoardComponent } from './pages/kanbanBoard/board/board.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'board',
    canActivate: [AuthGuard],
    component: NavbarComponent,
    children: [{ path: '', component: BoardComponent }],
  },
  { path: 'not-found', component: HomeComponent },
  { path: '**', redirectTo: '/not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
