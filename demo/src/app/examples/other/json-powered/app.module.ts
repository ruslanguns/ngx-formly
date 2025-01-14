import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ruslanguns/core';
import { FormlyBootstrapModule } from '@ruslanguns/bootstrap';

import { AppComponent } from './app.component';

import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot(),
  ],
  declarations: [
    AppComponent,
  ],
  providers: [UserService],
})
export class AppModule { }
