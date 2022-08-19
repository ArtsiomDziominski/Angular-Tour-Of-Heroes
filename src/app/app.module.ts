import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {DetailComponent} from './components/detail/detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {FormsModule} from "@angular/forms";

const router: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: 'heroes', component: HeroesComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
