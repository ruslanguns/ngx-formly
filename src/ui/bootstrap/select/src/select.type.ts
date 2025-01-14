import { Component, ViewChild, AfterViewChecked, ElementRef } from '@angular/core';
import { FieldType } from '@ruslanguns/core';

@Component({
  selector: 'formly-field-select',
  template: `
    <select *ngIf="to.multiple; else singleSelect" class="form-control"
      multiple
      [class.custom-select]="to.customSelect"
      [formControl]="formControl"
      [class.is-invalid]="showError"
      [formlyAttributes]="field">
        <ng-container *ngFor="let item of to.options | formlySelectOptions:field | async">
         <optgroup *ngIf="item.group" label="{{item.label}}">
            <option *ngFor="let child of item.group" [ngValue]="child.value" [disabled]="child.disabled">
              {{ child.label }}
            </option>
          </optgroup>
          <option *ngIf="!item.group" [ngValue]="item.value" [disabled]="item.disabled">{{ item.label }}</option>
        </ng-container>
    </select>

    <ng-template #singleSelect>
      <select class="form-control"
        #select
        [formControl]="formControl"
        [class.custom-select]="to.customSelect"
        [class.is-invalid]="showError"
        [formlyAttributes]="field">
        <option *ngIf="to.placeholder" [ngValue]="null">{{ to.placeholder }}</option>
        <ng-container *ngFor="let item of to.options | formlySelectOptions:field | async">
          <optgroup *ngIf="item.group" label="{{item.label}}">
            <option *ngFor="let child of item.group" [ngValue]="child.value" [disabled]="child.disabled">
              {{ child.label }}
            </option>
          </optgroup>
          <option *ngIf="!item.group" [ngValue]="item.value" [disabled]="item.disabled">{{ item.label }}</option>
        </ng-container>
      </select>
    </ng-template>
  `,
})
export class FormlyFieldSelect extends FieldType implements AfterViewChecked {
  @ViewChild('select') select!: ElementRef<HTMLSelectElement>;
  defaultOptions = {
    templateOptions: { options: [] },
  };

  // workaround for https://github.com/angular/angular/issues/10010
  ngAfterViewChecked() {
    if (!this.to.multiple && !this.to.placeholder && this.formControl.value === null) {
      const selectEl = this.select.nativeElement;
      if (selectEl.selectedIndex !== -1
        && (!selectEl.options[selectEl.selectedIndex] || selectEl.options[selectEl.selectedIndex].value !== null)
      ) {
        this.select.nativeElement.selectedIndex = -1;
      }
    }
  }
}
