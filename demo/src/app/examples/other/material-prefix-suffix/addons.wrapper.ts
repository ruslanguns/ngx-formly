import { Component, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { FieldWrapper } from '@ruslanguns/core';

@Component({
  selector: 'formly-wrapper-addons',
  template: `
  <ng-template #matPrefix>
    <span
      *ngIf="to.addonLeft"
      [ngStyle]="{cursor: to.addonLeft.onClick ? 'pointer' : 'inherit'}"
      (click)="addonLeftClick($event)"
    >
      <i *ngIf="to.addonLeft.class" [ngClass]="to.addonLeft.class"></i>&nbsp;
      <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>&nbsp;
    </span>
  </ng-template>

  <ng-container #fieldComponent></ng-container>

  <ng-template #matSuffix>
    <span
      *ngIf="to.addonRight"
      [ngStyle]="{cursor: to.addonRight.onClick ? 'pointer' : 'inherit'}"
      (click)="addonRightClick($event)"
    >
      &nbsp;<i *ngIf="to.addonRight.class" [ngClass]="to.addonRight.class"></i>
      &nbsp;<span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>
    </span>
  </ng-template>
  `,
})
export class FormlyWrapperAddons extends FieldWrapper implements AfterViewInit {
  @ViewChild('matPrefix') matPrefix: TemplateRef<any>;
  @ViewChild('matSuffix') matSuffix: TemplateRef<any>;

  ngAfterViewInit() {
    if (this.matPrefix) {
      this.to.prefix = this.matPrefix;
    }

    if (this.matSuffix) {
      this.to.suffix = this.matSuffix;
    }
  }

  addonRightClick($event: any) {
    if (this.to.addonRight.onClick) {
      this.to.addonRight.onClick(this.to, this, $event);
    }
  }

  addonLeftClick($event: any) {
    if (this.to.addonLeft.onClick) {
      this.to.addonLeft.onClick(this.to, this, $event);
    }
  }
}
