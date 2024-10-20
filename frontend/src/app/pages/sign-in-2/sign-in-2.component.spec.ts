import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignIn2Component } from './sign-in-2.component';

describe('SignIn2Component', () => {
  let component: SignIn2Component;
  let fixture: ComponentFixture<SignIn2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignIn2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignIn2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
