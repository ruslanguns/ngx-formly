import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-file',
  template: `
    <input type="file" [formControl]="formControl" [formlyAttributes]="field">
  `,
})
export class FormlyFieldFile extends FieldType { }
