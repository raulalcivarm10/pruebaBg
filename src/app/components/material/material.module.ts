import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports:[MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule
  ],
  imports: [
    CommonModule

  ]
})
export class MaterialModule { }
