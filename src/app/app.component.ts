import { Component } from '@angular/core';
import {IUser} from "./interfaces/app-interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: IUser = {
    name: 'hasan',
    age: 40
  }

  users: IUser[] = [
    {
      name: 'hasan',
      age: 35
    },
    {
      name: 'asiye',
      age: 31
    },
    {
      name: 'mohamad',
      age: 4
    },
    {
      name: 'ali',
      age: 28
    }
  ]
}
