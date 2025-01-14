import { Component } from '@angular/core';
import { FieldArrayType } from '@ruslanguns/core';

@Component({
  selector: 'formly-repeat-section',
  template: `
    <formly-field *ngFor="let field of field.fieldGroup" [field]="field"></formly-field>
  `,
})
export class RepeatTypeComponent extends FieldArrayType { }
