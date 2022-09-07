import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {delay, Observable, of} from "rxjs";

export interface UserContacts {
  name: string;
  telephone: string;
}

const userContactsMock = [
  {name: 'Jim', telephone: '345 123'},
  {name: 'Joana', telephone: '678 345'},
  {name: 'Tim', telephone: '897 654'}
]

@Injectable({
  providedIn: 'root',
})

export class ContactsResolver implements Resolve<UserContacts[]> {
  constructor() {}

  resolve(): Observable<UserContacts[]> {
    // We just mock user information in the resolver for avoiding complications.
    // Usually you use services in Angular for that
    //By the way, we used a delay operator to simulate asynchronous HTTP requests from the service.
    return of(userContactsMock).pipe(delay(1000));
  }
}
