import { AfterViewInit, Component, Input, SimpleChanges, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,  } from '@angular/forms';
@Component({
  selector: 'hello',
  template: `
  <form [formGroup]="theFormGroup">
    <input type="text" [formControl]="fooBar">

  </form>
  `
})
export class BrokenComponent implements AfterViewInit, OnChanges  {
  @Input() name: string;
  theFormGroup: FormGroup;

  constructor(private fb: FormBuilder) {

  }

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
