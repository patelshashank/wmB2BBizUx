import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransctionDetailsComponent } from './transction-details.component';

describe('TransctionDetailsComponent', () => {
  let component: TransctionDetailsComponent;
  let fixture: ComponentFixture<TransctionDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransctionDetailsComponent]
    });
    fixture = TestBed.createComponent(TransctionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
