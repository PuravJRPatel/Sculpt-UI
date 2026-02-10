import { Routes } from '@angular/router';
import {UserWorkoutDetailsComponent} from './pages/user-workout-details/user-workout-details.component';
import {HomePageComponent} from './pages/home-page/home-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  {path: `workout-detail/:workout`, component: UserWorkoutDetailsComponent}
];
