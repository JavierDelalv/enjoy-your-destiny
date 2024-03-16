import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauracionComponent } from './restauracion.component';

describe('RestauracionComponent', () => {
  let component: RestauracionComponent;
  let fixture: ComponentFixture<RestauracionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauracionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestauracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
