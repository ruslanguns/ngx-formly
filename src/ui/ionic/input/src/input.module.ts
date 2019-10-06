import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ruslanguns/ionic/form-field';

import { FormlyFieldInput } from './input.type';

@NgModule({
  declarations: [FormlyFieldInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FormlyFieldInput,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputModule { }
