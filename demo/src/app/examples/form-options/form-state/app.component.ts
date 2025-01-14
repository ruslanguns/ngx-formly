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
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'First Name',
      },
      expressionProperties: {
        // apply expressionProperty for disabled based on formState
        'templateOptions.disabled': 'formState.disabled',
      },
    },
  ];

  toggleDisabled() {
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
}
