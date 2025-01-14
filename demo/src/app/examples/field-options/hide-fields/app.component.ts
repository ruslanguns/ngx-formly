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
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Type in here to display the hidden field',
      },
    },
    {
      key: 'iLikeTwix',
      type: 'checkbox',
      templateOptions: {
        label: 'I like twix',
      },
      hideExpression: '!model.name',
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
