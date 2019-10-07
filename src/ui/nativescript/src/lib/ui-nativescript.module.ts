import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { FormlyNsFormFieldModule } from '@ruslanguns/nativescript/form-field';
import { FormlyNsTextFieldModule } from '@ruslanguns/nativescript/text-field';
import { FormlyNsTextareaFieldModule } from '@ruslanguns/nativescript/textarea';
import { FormlyNsCheckboxFieldModule } from '@ruslanguns/nativescript/checkbox';
import { FormlyNsRadioFieldModule } from '@ruslanguns/nativescript/radio';
import { FormlyNsSelectFieldModule } from '@ruslanguns/nativescript/select';

@NgModule({
  imports: [
    FormlyNsFormFieldModule,
    FormlyNsTextFieldModule,
    FormlyNsTextareaFieldModule,
    FormlyNsCheckboxFieldModule,
    FormlyNsRadioFieldModule,
    FormlyNsSelectFieldModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class FormlyNativescriptModule { }
