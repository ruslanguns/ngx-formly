import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-kendo-select',
  template: `
    <kendo-dropdownlist
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [data]="to.options | formlySelectOptions:field | async"
      [textField]="'label'"
      [valueField]="'value'"
      (valueChange)="to.change && to.change(field, $event)"
    >
    </kendo-dropdownlist>
  `,
})
export class FormlyFieldSelect extends FieldType {
  defaultOptions = {
    templateOptions: { options: [] },
  };
}
