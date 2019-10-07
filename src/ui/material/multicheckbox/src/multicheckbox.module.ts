import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { FormlySelectModule } from '@ruslanguns/core/select';
import { FormlyMatFormFieldModule } from '@ruslanguns/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { FormlyFieldMultiCheckbox } from './multicheckbox.type';

@NgModule({
  declarations: [FormlyFieldMultiCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    MatCheckboxModule,

    FormlyMatFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'multicheckbox',
          component: FormlyFieldMultiCheckbox,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyMatMultiCheckboxModule { }
