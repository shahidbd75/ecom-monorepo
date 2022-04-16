import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBankingComponent } from './mobile-banking.component';

describe('MobileBankingComponent', () => {
  let component: MobileBankingComponent;
  let fixture: ComponentFixture<MobileBankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
