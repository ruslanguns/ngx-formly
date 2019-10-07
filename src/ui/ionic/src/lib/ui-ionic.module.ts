import { NgModule } from '@angular/core';
import { FormlyFormFieldModule } from '@ruslanguns/ionic/form-field';
import { FormlyInputModule } from '@ruslanguns/ionic/input';
import { FormlyTextAreaModule } from '@ruslanguns/ionic/textarea';
import { FormlyRadioModule } from '@ruslanguns/ionic/radio';
import { FormlyCheckboxModule } from '@ruslanguns/ionic/checkbox';
import { FormlySelectModule } from '@ruslanguns/ionic/select';
import { FormlyToggleModule } from '@ruslanguns/ionic/toggle';
import { FormlySliderModule } from '@ruslanguns/ionic/slider';
import { FormlyDatetimeModule } from '@ruslanguns/ionic/datetime';

@NgModule({
  imports: [
    FormlyFormFieldModule,
    FormlyInputModule,
    FormlyTextAreaModule,
    FormlyRadioModule,
    FormlyCheckboxModule,
    FormlySelectModule,
    FormlyToggleModule,
    FormlySliderModule,
    FormlyDatetimeModule,
  ],
})
export class FormlyIonicModule { }

