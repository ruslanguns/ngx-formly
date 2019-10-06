import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-primeng-textarea',
  template: `
    <textarea
      [class.ng-dirty]="showError"
      [formControl]="formControl"
      [formlyAttributes]="field" pInputTextarea></textarea>
  `,
})
export class FormlyFieldTextArea extends FieldType { }
