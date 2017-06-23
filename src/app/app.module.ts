import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-deatil.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "app/hero.service";
import {RouterModule} from "@angular/router";




@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      {
        path: 'heroes',
        component: HeroesComponent
      }
    ])

  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
