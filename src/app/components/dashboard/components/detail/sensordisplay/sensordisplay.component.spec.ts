import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensordisplayComponent } from './sensordisplay.component';

describe('SensordisplayComponent', () => {
  let component: SensordisplayComponent;
  let fixture: ComponentFixture<SensordisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensordisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensordisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
