import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdesEditComponent } from './cdes-edit.component';

describe('CdesEditComponent', () => {
  let component: CdesEditComponent;
  let fixture: ComponentFixture<CdesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdesEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
