import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthService } from './authentication/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { KanbanService } from './service/kanban.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [AuthService, AuthGuard, KanbanService],
})
export class CoreModule {}
