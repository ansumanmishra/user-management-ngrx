import { User } from './state/user.state';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, getUsers } from '../reducers';
import { GetUsers, EditUser, AddUser } from './state/user.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new GetUsers(null));
    this.users$ = this.store.pipe(select(getUsers));
  }

  addUser() {
    const user: User = {
      name: 'Joe',
      technology: ['React'],
    };
    this.store.dispatch(new AddUser(user));
  }

  editUser() {
    this.store.dispatch(new EditUser({name: 'Ansuman', technology: ['angular', 'React']}));
  }

}
