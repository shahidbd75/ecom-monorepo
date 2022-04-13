import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibPersistencySharedComponent } from './lib-persistency-shared.component';

describe('LibPersistencySharedComponent', () => {
  let component: LibPersistencySharedComponent;
  let fixture: ComponentFixture<LibPersistencySharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibPersistencySharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibPersistencySharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
