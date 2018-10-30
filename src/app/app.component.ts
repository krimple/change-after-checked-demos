import { OnInit, Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
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
