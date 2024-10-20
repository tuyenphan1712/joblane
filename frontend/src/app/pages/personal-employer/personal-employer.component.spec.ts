import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalEmployerComponent } from './personal-employer.component';

describe('PersonalEmployerComponent', () => {
  let component: PersonalEmployerComponent;
  let fixture: ComponentFixture<PersonalEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalEmployerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
