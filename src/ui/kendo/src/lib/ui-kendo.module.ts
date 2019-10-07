import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ruslanguns/kendo/form-field';
import { FormlyInputModule } from '@ruslanguns/kendo/input';
import { FormlyTextAreaModule } from '@ruslanguns/kendo/textarea';
import { FormlyRadioModule } from '@ruslanguns/kendo/radio';
import { FormlyCheckboxModule } from '@ruslanguns/kendo/checkbox';
import { FormlySelectModule } from '@ruslanguns/kendo/select';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
  ],
})
export class FormlyKendoModule { }

