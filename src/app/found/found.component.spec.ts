import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundComponent } from './found.component';

describe('FoundComponent', () => {
  let component: FoundComponent;
  let fixture: ComponentFixture<FoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoundComponent]
    });
    fixture = TestBed.createComponent(FoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
