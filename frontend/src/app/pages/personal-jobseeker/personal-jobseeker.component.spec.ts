import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalJobSeekerComponent } from './personal-jobseeker.component';

describe('PersonalJobSeekerComponent', () => {
  let component: PersonalJobSeekerComponent;
  let fixture: ComponentFixture<PersonalJobSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalJobSeekerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalJobSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
