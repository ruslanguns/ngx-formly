import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ruslanguns/primeng/form-field';
import { FormlyInputModule } from '@ruslanguns/primeng/input';
import { FormlyTextAreaModule } from '@ruslanguns/primeng/textarea';
import { FormlyRadioModule } from '@ruslanguns/primeng/radio';
import { FormlyCheckboxModule } from '@ruslanguns/primeng/checkbox';
import { FormlySelectModule } from '@ruslanguns/primeng/select';

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
export class FormlyPrimeNGModule { }

