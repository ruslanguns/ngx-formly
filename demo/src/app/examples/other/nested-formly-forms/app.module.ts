import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { FormlyBootstrapModule } from '@ruslanguns/bootstrap';

import { PanelWrapperComponent } from './panel-wrapper.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      wrappers: [
        { name: 'panel', component: PanelWrapperComponent },
      ],
    }),
  ],
  declarations: [
    AppComponent,
    PanelWrapperComponent,
  ],
})
export class AppModule { }
