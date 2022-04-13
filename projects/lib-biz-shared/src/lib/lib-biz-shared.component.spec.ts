import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibBizSharedComponent } from './lib-biz-shared.component';

describe('LibBizSharedComponent', () => {
  let component: LibBizSharedComponent;
  let fixture: ComponentFixture<LibBizSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibBizSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibBizSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
