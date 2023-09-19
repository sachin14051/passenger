import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCardsComponent } from './pass-cards.component';

describe('PassCardsComponent', () => {
  let component: PassCardsComponent;
  let fixture: ComponentFixture<PassCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
