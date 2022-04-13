import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibCoreSharedComponent } from './lib-core-shared.component';

describe('LibCoreSharedComponent', () => {
  let component: LibCoreSharedComponent;
  let fixture: ComponentFixture<LibCoreSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibCoreSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibCoreSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
