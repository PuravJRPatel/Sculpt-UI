import { Component } from '@angular/core';
import {UserWorkoutsListComponent} from '../../page-components/user-workouts-list/user-workouts-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    UserWorkoutsListComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
