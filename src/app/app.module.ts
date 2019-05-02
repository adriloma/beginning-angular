import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from './products.service';
import { RatingComponent } from './rating.component';
import { ProductComponent } from './product.component';
import { TruncatePipe } from './truncate.pipe';
import { JumboTronComponent } from './jumboTron.component';
 
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    ProductComponent,
    TruncatePipe,
    JumboTronComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
