import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppliedJobComponent } from './list-applied-job.component';

describe('ListAppliedJobComponent', () => {
  let component: ListAppliedJobComponent;
  let fixture: ComponentFixture<ListAppliedJobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAppliedJobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListAppliedJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
