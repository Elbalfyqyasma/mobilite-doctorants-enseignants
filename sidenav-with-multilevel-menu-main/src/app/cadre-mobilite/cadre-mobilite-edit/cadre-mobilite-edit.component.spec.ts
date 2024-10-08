import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreMobiliteEditComponent } from './cadre-mobilite-edit.component';

describe('CadreMobiliteEditComponent', () => {
  let component: CadreMobiliteEditComponent;
  let fixture: ComponentFixture<CadreMobiliteEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreMobiliteEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadreMobiliteEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
