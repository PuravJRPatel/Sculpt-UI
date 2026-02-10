import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-user-workouts-list',
  standalone: true,
  imports: [
    CommonModule, RouterModule
  ],
  templateUrl: './user-workouts-list.component.html',
  styleUrl: './user-workouts-list.component.scss'
})
export class UserWorkoutsListComponent {
  constructor(private router: Router) {}

  workouts: string[] = ["Chest", "Back", "Legs", "Arms", "Shoulders"];

  onClickingWorkout(workout: string): void {
    this.router.navigate(['/workout-detail', workout]).then(() => {});
  }
}
