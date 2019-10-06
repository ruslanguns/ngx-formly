import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { FormlySelectModule } from '@ruslanguns/core/select';
import { FormlyBootstrapFormFieldModule } from '@ruslanguns/bootstrap/form-field';

import { FormlyFieldMultiCheckbox } from './multicheckbox.type';

@NgModule({
  declarations: [FormlyFieldMultiCheckbox],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormlyBootstrapFormFieldModule,
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
export class FormlyBootstrapMultiCheckboxModule { }
