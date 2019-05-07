import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { UserModule } from './modules/user/user.module';

const config = {
  apiKey: 'AIzaSyBs4sWqXGEpG1jApEHrHwyWc1Fimj4leoI',
  authDomain: 'beginning-angular-8b572.firebaseapp.com',
  databaseURL: 'https://beginning-angular-8b572.firebaseio.com',
  projectId: 'beginning-angular-8b572',
  storageBucket: 'beginning-angular-8b572.appspot.com',
  messagingSenderId: '633834722085',
  appId: '1:633834722085:web:b597d5b10c6c583b'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
      UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
