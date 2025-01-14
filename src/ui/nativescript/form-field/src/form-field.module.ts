import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { FormlyWrapperFormField } from './form-field.wrapper';

@NgModule({
  declarations: [FormlyWrapperFormField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NativeScriptFormsModule,
    FormlyModule.forChild({
      wrappers: [{
        name: 'form-field',
        component: FormlyWrapperFormField,
      }],
    }),
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FormlyNsFormFieldModule { }
