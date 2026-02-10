import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-user-workout-details-exercise-info',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-workout-details-exercise-info.component.html',
  styleUrl: './user-workout-details-exercise-info.component.scss'
})
export class UserWorkoutDetailsExerciseInfoComponent {
  ExerciseNames: string[] = ["Bench Press", "Incline Dumbbell Bench Press", "Chest Flies"];
}
