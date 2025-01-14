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
      key: 'text',
      type: 'input',
      modelOptions: {
        debounce: {
          default: 2000,
        },
      },
      templateOptions: {
        label: 'Debounce',
      },
    },
    {
      key: 'updateOnBlur',
      type: 'input',
      modelOptions: {
        updateOn: 'blur',
      },
      templateOptions: {
        label: '`updateOn` on Blur',
        required: true,
      },
    },
    {
      key: 'updateOnSubmit',
      type: 'input',
      modelOptions: {
        updateOn: 'submit',
      },
      templateOptions: {
        label: '`updateOn` on Submit',
        required: true,
      },
    },
  ];

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
