import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: `
    <input
        class="form-control"
        type="search"
        [formControl] = "searchControl">
  `
})
export class AppComponent {
  title = 'chapter8';
  searchControl = new FormControl();

  constructor() {
    this.searchControl.valueChanges
    .pipe(
        filter((text: string):boolean => text.length >= 3),
        debounceTime(400),
        distinctUntilChanged()
        )
    .subscribe((value: string):void => console.log(value));
  }
}
