import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './material/material.module';
import { ThemeService } from './service/theme.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule, // TODO : Fix this
  ],
  providers: [ ThemeService ]
})
export class CoreModule { }
