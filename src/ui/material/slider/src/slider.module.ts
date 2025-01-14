import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import { FormlyMatFormFieldModule } from '@ruslanguns/material/form-field';

import { FormlySliderTypeComponent } from './slider.type';

@NgModule({
  declarations: [FormlySliderTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSliderModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [{
        name: 'slider',
        component: FormlySliderTypeComponent,
        wrappers: ['form-field'],
      }],
    }),
  ],
})
export class FormlyMatSliderModule { }
