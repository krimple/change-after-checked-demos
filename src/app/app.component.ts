import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
//  template: '<hello [name]="name"></hello>`
  template: `<change-detect [name]="name"></change-detect>`
})
export class AppComponent  implements OnInit {
  name: string = 'React';

  ngOnInit() {
    setTimeout(()=> {
      this.name = 'Angular';
      console.log('changed later');
    }, 2000)
  }
}
