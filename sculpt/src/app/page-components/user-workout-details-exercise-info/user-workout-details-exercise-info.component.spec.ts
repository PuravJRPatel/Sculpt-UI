import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutDetailsExerciseInfoComponent } from './user-workout-details-exercise-info.component';

describe('UserWorkoutDetailsExerciseInfoComponent', () => {
  let component: UserWorkoutDetailsExerciseInfoComponent;
  let fixture: ComponentFixture<UserWorkoutDetailsExerciseInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkoutDetailsExerciseInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkoutDetailsExerciseInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
