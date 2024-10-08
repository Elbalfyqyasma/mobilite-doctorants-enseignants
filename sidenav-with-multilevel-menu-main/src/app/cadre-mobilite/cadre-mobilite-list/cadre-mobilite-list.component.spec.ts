import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadreMobiliteListComponent } from './cadre-mobilite-list.component';

describe('CadreMobiliteListComponent', () => {
  let component: CadreMobiliteListComponent;
  let fixture: ComponentFixture<CadreMobiliteListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadreMobiliteListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadreMobiliteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
