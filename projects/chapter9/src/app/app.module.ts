import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { GitHubService } from './github.service';
import{ FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { GitHubComponent } from './github.component';
import { routing } from './app.routing';
import { SettingsComponent } from './settings.component';
import { GitHubUserComponent } from './githubuser.component';
import { AuthGuard} from './auth-guard.service';
import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GitHubComponent,
    SettingsComponent,
    GitHubUserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [GitHubService, AuthGuard, LoginService, PreventUnsavedChangesGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
