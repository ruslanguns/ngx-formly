import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { FormlyMaterialModule } from '@ruslanguns/material';

import { AppComponent } from './app.component';
import { FormlyWrapperAddons } from './addons.wrapper';
import { addonsExtension } from './addons.extension';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyMaterialModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'addons', component: FormlyWrapperAddons },
      ],
      extensions: [
        { name: 'addons', extension: { onPopulate: addonsExtension } },
      ],
    }),
  ],
  declarations: [
    AppComponent,
    FormlyWrapperAddons,
  ],
})
export class AppModule { }
