import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdesComponent } from './cdes.component';

describe('CdesComponent', () => {
  let component: CdesComponent;
  let fixture: ComponentFixture<CdesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
