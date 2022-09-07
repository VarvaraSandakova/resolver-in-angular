import { NgModule } from '@angular/core';
import {Routes, RouterModule, RouteReuseStrategy} from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {ContactsResolver} from "./contacts.resolver";
import {UserComponent} from "./user/user.component";
import {CustomRouteReuseStrategy} from "./route-reuse-strategy";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserComponent
  },
  {
    path: 'user/:id',
    component: ContactsComponent,
    resolve: { contacts: ContactsResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ContactsResolver,
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy,
    }]
})
export class AppRoutingModule { }
