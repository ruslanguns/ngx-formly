import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ruslanguns/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormlyFormFieldModule } from '@ruslanguns/ionic/form-field';

import { FormlyFieldToggle } from './toggle.type';

@NgModule({
  declarations: [FormlyFieldToggle],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [{
        name: 'toggle',
        component: FormlyFieldToggle,
        wrappers: ['form-field'],
      }],
    }),
  ],
})
export class FormlyToggleModule { }
