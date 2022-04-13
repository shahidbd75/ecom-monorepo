import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibUISharedComponent } from './lib-ui-shared.component';

describe('LibUISharedComponent', () => {
  let component: LibUISharedComponent;
  let fixture: ComponentFixture<LibUISharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibUISharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibUISharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
