import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetResultComponent } from './target-result.component';

describe('TargetResultComponent', () => {
  let component: TargetResultComponent;
  let fixture: ComponentFixture<TargetResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
