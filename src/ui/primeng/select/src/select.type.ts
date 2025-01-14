import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-primeng-select',
  template: `
    <p-dropdown
      [class.ng-dirty]="showError"
      [placeholder]="to.placeholder"
      [options]="to.options | formlySelectOptions:field | async"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [showClear]="!to.required"
      (onChange)="to.change && to.change(field, $event)">
    </p-dropdown>
  `,
})
export class FormlyFieldSelect extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
