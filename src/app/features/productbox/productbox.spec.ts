import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productbox } from './productbox';

describe('Productbox', () => {
  let component: Productbox;
  let fixture: ComponentFixture<Productbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productbox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Productbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
