import { Component } from '@angular/core';
import { GitHubService } from './github.service';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: `
            <input class="form-control" type="search" [formControl] = "searchControl">
            <h3> Github users results </h3>
            <div *ngIf="isLoading">
                <i class="fa fa-spinner fa-spin fa-3x"></i>
             </div>
            <div *ngIf="!isLoading">
                <div *ngFor="let user of users" class="media">
                  <div class="media-left">
                    <a [routerLink]="['user', user.login, user.score]">
                      <img class="media-object img" [src]= "user.avatar_url">
                    </a>
                  </div>
                      <div class="media-body">
                        <h5 class="media-heading"> {{ user.login }} </h5>
                        Score: {{ user.score }}
                      </div>
            </div>
            </div>



             `,
   styles: [`
    .img {
        position: relative;
        float: left;
        width: 100px;
        height: 100px;
        background-position: 50% 50%;
        background-repeat: no-repeat;
        background-size: cover;
    }

   `]
})
export class GitHubComponent {
  title = 'chapter9';
  users;
  isLoading: boolean = true;
  searchControl = new FormControl();
  constructor(private _githubService: GitHubService) {

  }

  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(
        filter((text: string):boolean => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
        )
    .subscribe((value: string):void => {
        this._githubService.getGitHubData(value)
            .subscribe(data => {
                this.isLoading = false;
                this.users = data.items;
            });
    });
  }
}
