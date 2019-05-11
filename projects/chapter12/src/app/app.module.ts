import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserRouting } from './modules/user/user.routing';
import { UserModule } from './modules/user/user.module';
import { LoginRouting } from './modules/login/login.routing';
import { LoginModule } from './modules/login/login.module';
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
    UserModule,
    LoginModule,
    UserRouting,
    LoginRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
