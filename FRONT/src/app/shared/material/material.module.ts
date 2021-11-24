import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const Material = [MatToolbarModule, MatIconModule];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
