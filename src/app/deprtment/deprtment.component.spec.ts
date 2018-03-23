import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeprtmentComponent } from './deprtment.component';

describe('DeprtmentComponent', () => {
  let component: DeprtmentComponent;
  let fixture: ComponentFixture<DeprtmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeprtmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeprtmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
