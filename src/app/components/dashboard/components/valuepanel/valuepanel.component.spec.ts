import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuepanelComponent } from './valuepanel.component';

describe('ValuepanelComponent', () => {
  let component: ValuepanelComponent;
  let fixture: ComponentFixture<ValuepanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuepanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
