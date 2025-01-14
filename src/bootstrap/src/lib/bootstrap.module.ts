import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { FormlySelectModule } from '@ruslanguns/core/select';
import { BOOTSTRAP_FORMLY_CONFIG, FIELD_TYPE_COMPONENTS } from './bootstrap.config';
import { FormlyBootstrapAddonsModule } from '@ruslanguns/bootstrap/addons';

@NgModule({
  declarations: [
    FIELD_TYPE_COMPONENTS,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlySelectModule,
    FormlyModule.forChild(BOOTSTRAP_FORMLY_CONFIG),
    FormlyBootstrapAddonsModule,
  ],
})
export class FormlyBootstrapModule { }
