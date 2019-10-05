import { User } from './state/user.state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getUsers } from '../reducers';
import { GetUsers, AddUser } from './state/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user$: Observable<User>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers(null));

    setTimeout( () => {
      this.store.dispatch(new AddUser(null));
    }, 5000);
    this.store.pipe(select(getUsers)).subscribe(res => {
      console.log(res);
    });

    this.user$ = this.store.pipe(select(getUsers));
  }

}
