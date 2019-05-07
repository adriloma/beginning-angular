import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

interface User {
    name: string;
    email: string;
}

@Component({
    selector: 'user',
    templateUrl: './pages/users-list.component.html'
})
export class UserComponent {
    usersCol: AngularFirestoreCollection<User>;
    users: any;

    constructor(private afs: AngularFirestore) {
        // ...
    }

    ngOnInit() {
       this.usersCol = this.afs.collection('users') ;
       this.users = this.usersCol.valueChanges();
    }

}