import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeSettingComponent } from './node-setting.component';

describe('NodeSettingComponent', () => {
  let component: NodeSettingComponent;
  let fixture: ComponentFixture<NodeSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
