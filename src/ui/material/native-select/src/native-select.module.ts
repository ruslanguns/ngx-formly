import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { FormlySelectModule } from '@ruslanguns/core/select';
import { ReactiveFormsModule } from '@angular/forms';

import { FormlyMatFormFieldModule } from '@ruslanguns/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { FormlyFieldNativeSelect } from './native-select.type';

@NgModule({
  declarations: [FormlyFieldNativeSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,

    FormlyMatFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'native-select',
          component: FormlyFieldNativeSelect,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyMatNativeSelectModule { }
