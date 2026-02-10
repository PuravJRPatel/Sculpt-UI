import { Component } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {
  UserWorkoutDetailsExerciseInfoComponent
} from '../../page-components/user-workout-details-exercise-info/user-workout-details-exercise-info.component';

@Component({
  selector: 'app-user-workout-details',
  standalone: true,
  imports: [RouterModule, UserWorkoutDetailsExerciseInfoComponent],
  templateUrl: './user-workout-details.component.html',
  styleUrl: './user-workout-details.component.scss'
})
export class UserWorkoutDetailsComponent {
  workout: string | null = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.workout = this.route.snapshot.paramMap.get('workout');
  }
}
