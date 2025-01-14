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
      key: 'marvel1',
      type: 'select',
      templateOptions: {
        label: 'Normal Select',
        options: [
          { label: 'Iron Man', value: 'iron_man' },
          { label: 'Captain America', value: 'captain_america' },
          { label: 'Black Widow', value: 'black_widow' },
          { label: 'Hulk', value: 'hulk' },
          { label: 'Captain Marvel', value: 'captain_marvel' },
        ],
      },
    },
    {
      key: 'marvel2',
      type: 'select',
      templateOptions: {
        label: 'Grouped Select',
        options: [
          { label: 'Iron Man', value: 'iron_man', group: 'Male' },
          { label: 'Captain America', value: 'captain_america', group: 'Male' },
          { label: 'Black Widow', value: 'black_widow', group: 'Female' },
          { label: 'Hulk', value: 'hulk', group: 'Male' },
          { label: 'Captain Marvel', value: 'captain_marvel', group: 'Female' },
        ],
      },
    },
    {
      key: 'marvel3',
      type: 'select',
      templateOptions: {
        label: 'Select with custom name/value/group',
        options: [
          { label: 'Iron Man', id: 'iron_man', gender: 'Male' },
          { label: 'Captain America', id: 'captain_america', gender: 'Male' },
          { label: 'Black Widow', id: 'black_widow', gender: 'Female' },
          { label: 'Hulk', id: 'hulk', gender: 'Male' },
          { label: 'Captain Marvel', id: 'captain_marvel', gender: 'Female' },
        ],
        groupProp: 'gender',
        valueProp: 'id',
        labelProp: 'label',
      },
    },
    {
      key: 'multiselect',
      type: 'select',
      templateOptions: {
        label: 'Multi-select',
        multiple: true,
        options: [
          { label: 'Iron Man', value: 'iron_man' },
          { label: 'Captain America', value: 'captain_america' },
          { label: 'Black Widow', value: 'black_widow' },
          { label: 'Hulk', value: 'hulk' },
          { label: 'Captain Marvel', value: 'captain_marvel' },
        ],
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
