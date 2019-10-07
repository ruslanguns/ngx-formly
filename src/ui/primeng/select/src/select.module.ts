import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { DropdownModule } from 'primeng/dropdown';
import { FormlySelectModule as FormlyCoreSelectModule } from '@ruslanguns/core/select';

import { FormlyFormFieldModule } from '@ruslanguns/primeng/form-field';
import { FormlyFieldSelect } from './select.type';

@NgModule({
  declarations: [FormlyFieldSelect],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,

    FormlyFormFieldModule,
    FormlyCoreSelectModule,
    FormlyModule.forChild({
      types: [{
        name: 'select',
        component: FormlyFieldSelect,
        wrappers: ['form-field'],
      }],
    }),
  ],
})
export class FormlySelectModule { }
