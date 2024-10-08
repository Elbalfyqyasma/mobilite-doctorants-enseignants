import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreMobiliteComponent } from './cadre-mobilite.component';

describe('CadreMobiliteComponent', () => {
  let component: CadreMobiliteComponent;
  let fixture: ComponentFixture<CadreMobiliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreMobiliteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadreMobiliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
