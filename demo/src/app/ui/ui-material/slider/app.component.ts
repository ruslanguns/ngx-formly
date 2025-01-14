import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ruslanguns/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Slider',
      type: 'slider',
      templateOptions: {
        label: 'Slider label',
        // placeholder: 'Slider Placeholder',
        description: 'Slider Description',
        required: true,
      },
    },
  ];
}
