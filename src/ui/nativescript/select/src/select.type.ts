import { Component } from '@angular/core';
import { FieldType } from '@ruslanguns/core';
import { action } from 'tns-core-modules/ui/dialogs';

@Component({
  selector: 'formly-field-ns-select',
  template: `
    <ng-container *ngIf="to.options | formlySelectOptions:field | async as options">
      <Button (tap)="tap(options)" [text]="selectedItem(options)"></Button>
    </ng-container>
  `,
})
export class FormlyFieldSelect extends FieldType {
  tap(options) {
    action({ title: this.to.label, actions: options.map(o => o.label) })
      .then((selectedAction) => this.formControl.patchValue(options.find(o => o.label === selectedAction).value));
  }

  selectedItem(options) {
    if (this.formControl.value) {
      return options.find(o => o.value === this.formControl.value).label;
    }

    return this.to.placeholder;
  }
}
