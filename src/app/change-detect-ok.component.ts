/**
 * To make fail, comment out the changeDetection setting and the call in ngOnChanges to changeDetectorRef
 */
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'change-detect',
  template: `
    <form *ngIf="theFormGroup" [formGroup]="theFormGroup">
        <input type="text" [formControl]="fooBar">
    </form>     
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectOkComponent implements AfterViewInit, OnChanges  {
    @Input() name: string;
    theFormGroup: FormGroup;

    constructor(private fb: FormBuilder, private changeDetector: ChangeDetectorRef) { }


    ngAfterViewInit() {
        this.theFormGroup = this.fb.group({
            'foo-bar-123': ['']
        })
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['name'] && this.theFormGroup) {
            this.theFormGroup.patchValue({
                'foo-bar-123': changes['name'].currentValue
            });

           this.changeDetector.markForCheck();
        }

    }

    get fooBar() {
        if (this.theFormGroup) {
            return this.theFormGroup.get('foo-bar-123')
        } else {
            return null;
        }
    }

}