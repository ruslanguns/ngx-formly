import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyBootstrapFormFieldModule } from '@ruslanguns/bootstrap/form-field';
import { FormlyFieldTextArea } from './textarea.type';

@NgModule({
  declarations: [FormlyFieldTextArea],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    FormlyBootstrapFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'textarea',
          component: FormlyFieldTextArea,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyBootstrapTextAreaModule { }
