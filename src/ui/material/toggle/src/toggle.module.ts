import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormlyMatFormFieldModule } from '@ruslanguns/material/form-field';

import { FormlyToggleTypeComponent } from './toggle.type';

@NgModule({
  declarations: [FormlyToggleTypeComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    FormlyMatFormFieldModule,
    FormlyModule.forChild({
      types: [{
        name: 'toggle',
        component: FormlyToggleTypeComponent,
        wrappers: ['form-field'],
      }],
    }),
  ],
})
export class FormlyMatToggleModule { }
