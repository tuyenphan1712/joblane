import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailJsComponent } from './detail-js.component';

describe('DetailJsComponent', () => {
  let component: DetailJsComponent;
  let fixture: ComponentFixture<DetailJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
