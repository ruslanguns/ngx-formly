import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-primeng-radio',
  template: `
    <p-radioButton *ngFor="let option of to.options | formlySelectOptions:field | async"
      [class.ng-dirty]="showError"
      [name]="id"
      [formControl]="formControl"
      [label]="option.label"
      [value]="option.value">
    </p-radioButton>
  `,
})
export class FormlyFieldRadio extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
