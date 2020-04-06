import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchiveResultComponent } from './achive-result.component';

describe('AchiveResultComponent', () => {
  let component: AchiveResultComponent;
  let fixture: ComponentFixture<AchiveResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchiveResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchiveResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
