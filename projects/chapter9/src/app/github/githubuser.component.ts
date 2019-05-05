import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user',
    template: `
        <h1> User login: {{ login }} </h1>
        <h1> User Score: {{ score }} </h1>
    `
})
export class GitHubUserComponent {
    login: string;
    score: string;
    subscription;

    constructor(private _route: ActivatedRoute) {

    }

    ngOnInit() {
        this.subscription = this._route.params.subscribe(params => {
            this.login = params["login"];
            this.score = params["score"];
        })
    }

    ngOnDestroy() {
        debugger;
        this.subscription.unsubscribe();
    }
}