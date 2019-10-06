import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ruslanguns/core';
import { FormlyBootstrapModule } from '@ruslanguns/bootstrap';

import { AppComponent } from './app.component';

export function RequiredValidatorMessage(err, field: FormlyFieldConfig) {
  return `"This required field was validated after ${field.formControl.updateOn}"`;
}

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: RequiredValidatorMessage,
        },
      ],
    }),
  ],
  declarations: [
    AppComponent,
  ],
})
export class AppModule { }
