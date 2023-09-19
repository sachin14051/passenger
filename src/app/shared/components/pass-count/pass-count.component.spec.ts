import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCountComponent } from './pass-count.component';

describe('PassCountComponent', () => {
  let component: PassCountComponent;
  let fixture: ComponentFixture<PassCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassCountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
