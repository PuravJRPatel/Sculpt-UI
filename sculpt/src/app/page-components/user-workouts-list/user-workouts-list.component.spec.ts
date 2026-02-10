import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWorkoutsListComponent } from './user-workouts-list.component';

describe('UserWorkoutsListComponent', () => {
  let component: UserWorkoutsListComponent;
  let fixture: ComponentFixture<UserWorkoutsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWorkoutsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWorkoutsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
