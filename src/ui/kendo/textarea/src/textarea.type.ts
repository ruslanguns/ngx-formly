import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-kendo-textarea',
  template: `
    <textarea class="k-textarea"
      [class.k-state-invalid]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field"></textarea>
  `,
})
export class FormlyFieldTextArea extends FieldType { }
