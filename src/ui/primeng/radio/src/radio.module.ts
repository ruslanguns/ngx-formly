import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlySelectModule } from '@ruslanguns/core/select';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FormlyFormFieldModule } from '@ruslanguns/primeng/form-field';
import { FormlyFieldRadio } from './radio.type';

@NgModule({
  declarations: [FormlyFieldRadio],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RadioButtonModule,

    FormlyFormFieldModule,
    FormlySelectModule,
    FormlyModule.forChild({
      types: [{
        name: 'radio',
        component: FormlyFieldRadio,
        wrappers: ['form-field'],
      }],
    }),
  ],
})
export class FormlyRadioModule { }
