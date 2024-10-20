import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmComponent } from './detail-em.component';

describe('DetailEmComponent', () => {
  let component: DetailEmComponent;
  let fixture: ComponentFixture<DetailEmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailEmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
