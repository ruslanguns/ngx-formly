import { NgModule } from '@angular/core';

import { FormlyMatFormFieldModule } from '@ruslanguns/material/form-field';
import { FormlyMatInputModule } from '@ruslanguns/material/input';
import { FormlyMatTextAreaModule } from '@ruslanguns/material/textarea';
import { FormlyMatRadioModule } from '@ruslanguns/material/radio';
import { FormlyMatCheckboxModule } from '@ruslanguns/material/checkbox';
import { FormlyMatMultiCheckboxModule } from '@ruslanguns/material/multicheckbox';
import { FormlyMatSelectModule } from '@ruslanguns/material/select';

@NgModule({
  imports: [
    FormlyMatFormFieldModule,
    FormlyMatInputModule,
    FormlyMatTextAreaModule,
    FormlyMatRadioModule,
    FormlyMatCheckboxModule,
    FormlyMatMultiCheckboxModule,
    FormlyMatSelectModule,
  ],
})
export class FormlyMaterialModule { }
