import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-root',
  template: `
    <user></user>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private afs: AngularFirestore) {
    console.log(afs);
  }
}
