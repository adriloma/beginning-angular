import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { SettingsComponent } from './settings.component';

import { routing } from './app.routing';
import { GitHubModule} from './github/github.module';
import { LoginModule} from './login/login.module';
import { GitHubRouting } from './github/github.routing';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    SettingsComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    GitHubModule,
    GitHubRouting,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
