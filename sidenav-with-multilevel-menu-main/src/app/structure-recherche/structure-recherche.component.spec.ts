import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructureRechercheComponent } from './structure-recherche.component';

describe('StructureRechercheComponent', () => {
  let component: StructureRechercheComponent;
  let fixture: ComponentFixture<StructureRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructureRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructureRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
