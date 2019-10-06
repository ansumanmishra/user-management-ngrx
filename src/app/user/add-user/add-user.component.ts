import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AddUser } from '../state/user.actions';
import { State } from 'src/app/reducers';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder, private store: Store<State>) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: [''],
      technology: [''],
    });
  }

  saveUser() {
    this.store.dispatch(new AddUser(this.form.value));
    this.form.reset();
  }

}
