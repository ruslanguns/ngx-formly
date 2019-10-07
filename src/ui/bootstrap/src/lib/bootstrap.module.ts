import { NgModule } from '@angular/core';

import { FormlyBootstrapFormFieldModule } from '@ruslanguns/bootstrap/form-field';
import { FormlyBootstrapInputModule } from '@ruslanguns/bootstrap/input';
import { FormlyBootstrapTextAreaModule } from '@ruslanguns/bootstrap/textarea';
import { FormlyBootstrapRadioModule } from '@ruslanguns/bootstrap/radio';
import { FormlyBootstrapCheckboxModule, FormlyFieldCheckbox } from '@ruslanguns/bootstrap/checkbox';
import { FormlyBootstrapMultiCheckboxModule } from '@ruslanguns/bootstrap/multicheckbox';
import { FormlyBootstrapSelectModule } from '@ruslanguns/bootstrap/select';
import { FormlyBootstrapAddonsModule } from '@ruslanguns/bootstrap/addons';

@NgModule({
  imports: [
    FormlyBootstrapFormFieldModule,
    FormlyBootstrapInputModule,
    FormlyBootstrapTextAreaModule,
    FormlyBootstrapRadioModule,
    FormlyBootstrapCheckboxModule,
    FormlyBootstrapMultiCheckboxModule,
    FormlyBootstrapSelectModule,
    FormlyBootstrapAddonsModule,
  ],
})
export class FormlyBootstrapModule { }
