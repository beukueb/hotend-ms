import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotendComponent } from './hotend.component';

describe('HotendComponent', () => {
  let component: HotendComponent;
  let fixture: ComponentFixture<HotendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
