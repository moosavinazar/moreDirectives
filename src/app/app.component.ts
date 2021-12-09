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
}
