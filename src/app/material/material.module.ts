import { NgModule } from '@angular/core';

import {MatDatepickerModule, MatDatepickerInput} from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';

import {MatInputModule} from '@angular/material/input';

const modules = [
  CommonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatNativeDateModule ,
  MatInputModule,
]


@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports:[
    ...modules
  ]
})
export class MaterialModule { }
